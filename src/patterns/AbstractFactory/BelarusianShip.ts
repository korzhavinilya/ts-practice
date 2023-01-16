import Transport from '../FactoryMethod/interfaces/transport.interface';

export default class BelarusianShip implements Transport {
  deliver(): void {
    console.log('Belarusian Ship delivering');
  }
}
