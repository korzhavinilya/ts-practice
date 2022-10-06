import Ship from '../FactoryMethod/Ship';
import Truck from '../FactoryMethod/Truck';
import RussiaShip from './RussiaShip';
import RussiaTruck from './RussiaTruck';
import TransportFactory from './TransportFactory';

export default class RussuaTransportFactory implements TransportFactory {
  createTruck(): Truck {
    return new RussiaTruck();
  }

  createShip(): Ship {
    return new RussiaShip();
  }
}
