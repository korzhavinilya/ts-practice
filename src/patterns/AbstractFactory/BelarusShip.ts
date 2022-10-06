import Transport from '../FactoryMethod/interfaces/transport.interface';

export default class BelarusShip implements Transport {
  deliver(): void {
    console.log('BelarusShip delivering');
  }
}
