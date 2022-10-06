import Logistics from './Logistics';
import RoadLogistics from './RoadLogistics';
import SeaLogistics from './SeaLogistics';

const requirement = 'sea';
let logistics: Logistics;

if (requirement === 'sea') {
  logistics = new SeaLogistics();
} else {
  logistics = new RoadLogistics();
}

logistics.planDelivery();
