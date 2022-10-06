export function convertObject(obj: object) {
  const base64Data = Buffer.from(JSON.stringify(obj)).toString('base64');
  console.log('base64', base64Data);

  const result = JSON.parse(Buffer.from(base64Data, 'base64').toString('utf8'));
  console.log('utf8', result);
}

export function convertObjectTest() {
  const obj = { foo: 'bar' };
  convertObject(obj);
}
