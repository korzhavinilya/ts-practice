import Transport from '../FactoryMethod/interfaces/transport.interface';

export default class BelarusTruck implements Transport {
  deliver(): void {
    console.log('BelarusTruck delivering');
  }
}
