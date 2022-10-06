import Transport from './interfaces/transport.interface';

export default class Truck implements Transport {
  deliver(): void {
    console.log('Truck delivering');
  }
}
