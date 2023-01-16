import Transport from '../FactoryMethod/interfaces/transport.interface';

export default class BelarusianTruck implements Transport {
  deliver(): void {
    console.log('Belarusian Truck delivering');
  }
}
