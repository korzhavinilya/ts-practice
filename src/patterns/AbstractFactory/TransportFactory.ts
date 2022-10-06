import Ship from '../FactoryMethod/Ship';
import Truck from '../FactoryMethod/Truck';

export default interface TransportFactory {
  createTruck(): Truck;
  createShip(): Ship;
}
