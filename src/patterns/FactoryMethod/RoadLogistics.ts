import Logistics from './Logistics';
import Truck from './Truck';

export default class RoadLogistics extends Logistics {
  createTransport() {
    return new Truck();
  }
}
