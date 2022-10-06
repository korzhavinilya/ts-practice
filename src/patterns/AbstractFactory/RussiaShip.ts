import Transport from '../FactoryMethod/interfaces/transport.interface';

export default class RussiaShip implements Transport {
  deliver(): void {
    console.log('RussiaShip delivering');
  }
}
