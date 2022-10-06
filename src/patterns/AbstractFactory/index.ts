import BelarusTransportFactory from './BelarusTransportFactory';
import RussuaTransportFactory from './RussuaTransportFactory';
import TransportFactory from './TransportFactory';

const requirements = 'belarus';

let transportFactory: TransportFactory;

if (requirements === 'belarus') {
  transportFactory = new BelarusTransportFactory();
} else {
  transportFactory = new RussuaTransportFactory();
}

transportFactory.createShip().deliver();
transportFactory.createTruck().deliver();
