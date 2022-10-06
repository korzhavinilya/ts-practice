import Transport from './interfaces/transport.interface';

export default class Ship implements Transport {
  deliver(): void {
    console.log('Ship delivering');
  }
}
