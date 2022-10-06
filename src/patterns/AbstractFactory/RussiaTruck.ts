import Transport from '../FactoryMethod/interfaces/transport.interface';

export default class RussiaTruck implements Transport {
  deliver(): void {
    console.log('RussiaTruck delivering');
  }
}
