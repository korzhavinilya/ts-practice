import Transport from '../FactoryMethod/interfaces/transport.interface';

export default class RussianTruck implements Transport {
  deliver(): void {
    console.log('Russian Truck delivering');
  }
}
