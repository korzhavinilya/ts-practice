import Transport from '../FactoryMethod/interfaces/transport.interface';

export default class RussianShip implements Transport {
  deliver(): void {
    console.log('Russian Ship delivering');
  }
}
