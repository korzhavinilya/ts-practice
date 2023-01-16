import Ship from '../FactoryMethod/Ship';
import Truck from '../FactoryMethod/Truck';
import RussianShip from './RussianShip';
import RussianTruck from './RussianTruck';
import TransportFactory from './TransportFactory';

export default class RussianTransportFactory implements TransportFactory {
  createTruck(): Truck {
    return new RussianTruck();
  }

  createShip(): Ship {
    return new RussianShip();
  }
}
