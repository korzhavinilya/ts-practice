/* eslint-disable @typescript-eslint/no-var-requires */
const {
  microsoftId,
  order,
  orderShippingAddresses,
  orderCoupons,
  products,
  productsCustomFields,
} = require('./data');

const data = {};

const dateCreated = new Date(order.date_created);
const latest_date = dateCreated.toISOString().slice(0, 10);
data.date_created = latest_date;

data.cust_id =
  order.customer_id === 0
    ? 'Guest'
    : microsoftId
    ? microsoftId
    : `WSBC-${customerId}`;

let prod_len = products.length;

let LineDiscountAmount = 0;

let lineno = 10000,
  qty,
  price,
  sku,
  prod_name,
  cost_price_ex_tax,
  catalogue_code,
  value,
  custom_field_len;

const line_array = [];

for (let i = 0; i < prod_len; i++) {
  lineno = lineno + 10000;
  line_array.push({
    lineno: lineno,
  });
}

data.number = line_array;

const lineno_len = data.number.length;

for (let j = 0; j < lineno_len; j++) {
  qty = products[j].quantity;
  price = products[j].price_ex_tax;
  sku = products[j].sku;
  cost_price_ex_tax = products[j].price_ex_tax;
  prod_name = products[j].name.replace('"', 'in');

  if (products[j].applied_discounts) {
    for (let a = 0; a < products[j].applied_discounts.length; a++) {
      LineDiscountAmount =
        LineDiscountAmount + Number(products[j].applied_discounts[a].amount);
    }

    data.number[j].lineDiscountAmount = LineDiscountAmount;
    LineDiscountAmount = 0;
  } else {
    data.number[j].lineDiscountAmount = 0;
  }

  const customFields = productsCustomFields.find(
    (field) => field.productId === products[j].id
  )?.data;

  if (customFields?.length) {
    custom_field_len = customFields.length;

    for (let m = 0; m < custom_field_len; m++) {
      if (customFields[m].name == 'Catalogue Code') {
        value = customFields[m].value;
      }
    }

    if (value) {
      catalogue_code = value;
    } else {
      catalogue_code = '';
    }

    data.number[j].qty = qty;
    data.number[j].price = price;
    data.number[j].catalogue_code = catalogue_code;
    data.number[j].cost_price_ex_tax = cost_price_ex_tax;
    data.number[j].name = prod_name;
  } else {
    data.number = [];
  }
}

const salesline = data.number.map(
  ({ lineno, qty, price, lineDiscountAmount, name, catalogue_code }) => ({
    lineno,
    orderqty: qty,
    unitpriceVATlessdiscount: price,
    lineDiscountAmount: lineDiscountAmount,
    itemdescription: name,
    itemcataloguecode: catalogue_code,
    webUnitPriceExclVat: 0,
  })
);

const salesOrder = {
  Document_Type: 'Order',
  orderid: order.id,
  customerid: data.cust_id,
  orderdate: data.date_created,
  paymentmethod: 'Upfront Card Charge',
  ...(orderCoupons.coupon_discount && {
    webdiscountamount: orderCoupons.coupon_discount,
  }),
  selltofirstname: order.billing_address.first_name,
  selltolastname: order.billing_address.last_name,
  selltoAddress: order.billing_address.street_1,
  selltoAddress2: order.billing_address.street_2,
  selltoCity: order.billing_address.city,
  selltoCounty: order.billing_address.state,
  selltoPostCode: order.billing_address.zip,
  selltophoneno: order.billing_address.phone,
  selltoemail: order.billing_address.email,
  deliveryFirstName: orderShippingAddresses.first_name,
  deliverySurname: orderShippingAddresses.last_name,
  address1: orderShippingAddresses.street_1,
  address2: orderShippingAddresses.street_2,
  city: orderShippingAddresses.city,
  county: orderShippingAddresses.state,
  postcode: orderShippingAddresses.zip,
  deliverymessage: order.customer_message,
  deliverycost: order.shipping_cost_inc_tax || 0,
  ordersource: 'Big Commerce',
  totalinctax: order.total_inc_tax || 0,
  cataloguecode: 'WSMASTER',
  ...(orderCoupons.code && { webdiscountcode: orderCoupons.code }),
  salesline,
  checkoutTransactionId: order.payment_provider_id,
  eVoucherAmount: order.gift_certificate_amount,
};
