import Logistics from './Logistics';
import Ship from './Ship';

export default class SeaLogistics extends Logistics {
  createTransport() {
    return new Ship();
  }
}
