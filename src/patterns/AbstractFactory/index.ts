import BelarusianTransportFactory from './BelarusianTransportFactory';
import RussiaTransportFactory from './RussianTransportFactory';
import TransportFactory from './TransportFactory';

const requirements = 'belarus';

let transportFactory: TransportFactory;

if (requirements === 'belarus') {
  transportFactory = new BelarusianTransportFactory();
} else {
  transportFactory = new RussiaTransportFactory();
}

transportFactory.createShip().deliver();
transportFactory.createTruck().deliver();
