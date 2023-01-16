import Ship from '../FactoryMethod/Ship';
import Truck from '../FactoryMethod/Truck';
import BelarusianShip from './BelarusianShip';
import BelarusianTruck from './BelarusianTruck';
import TransportFactory from './TransportFactory';

export default class BelarusianTransportFactory implements TransportFactory {
  createTruck(): Truck {
    return new BelarusianTruck();
  }

  createShip(): Ship {
    return new BelarusianShip();
  }
}
