/**
 * Расширяйте классы, но не изменяйте их первоначальный код.
 */

export function openClosedPrinciple() {
  const order = new Order([1, 2, 3]);
  const groundShipping = new GroundShipping();
  const airShipping = new AirShipping();

  order.setShippingType(groundShipping);
  console.log('ground shipping:', order.getShippingCost());

  order.setShippingType(airShipping);
  console.log('air shipping', order.getShippingCost());
}

class Order {
  private shipping?: ShippingType;

  constructor(private items: number[]) {}

  getTotal() {
    return this.items.reduce((result, value) => {
      return result + value;
    }, 0);
  }

  setShippingType(shipping: ShippingType) {
    this.shipping = shipping;
  }

  getShippingCost() {
    return this.shipping?.getCost(this);
  }
}

interface ShippingType {
  getCost(order: Order): number;
}

class GroundShipping implements ShippingType {
  getCost(order: Order) {
    const total = order.getTotal();

    // Free for large orders
    if (total > 5) {
      return 0;
    }

    // 1.5$ per kilo
    return total * 1.5;
  }
}

class AirShipping implements ShippingType {
  getCost(order: Order) {
    const total = order.getTotal();

    // 3$ per kilo
    return total * 3;
  }
}
