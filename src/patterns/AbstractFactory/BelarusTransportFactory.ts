import Ship from '../FactoryMethod/Ship';
import Truck from '../FactoryMethod/Truck';
import BelarusShip from './BelarusShip';
import BelarusTruck from './BelarusTruck';
import TransportFactory from './TransportFactory';

export default class BelarusTransportFactory implements TransportFactory {
  createTruck(): Truck {
    return new BelarusTruck();
  }

  createShip(): Ship {
    return new BelarusShip();
  }
}
