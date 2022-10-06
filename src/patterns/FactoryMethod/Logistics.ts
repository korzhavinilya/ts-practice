import Transport from './interfaces/transport.interface';

export default abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery() {
    const transport = this.createTransport();
    transport.deliver();
  }
}
