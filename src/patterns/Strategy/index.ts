import Navigator from './Navigator';
import PublicTransportStrategy from './PublicTransportStrategy';
import RoadStrategy from './RoadStrategy';
import WalkingStrategy from './WalkingStrategy';

const publicTransportStrategy = new PublicTransportStrategy();
const navigator = new Navigator(publicTransportStrategy);
navigator.buildRoute(1, 2);

const roadStrategy = new RoadStrategy();
navigator.routeStrategy(roadStrategy);
navigator.buildRoute(1, 2);

const walkingStrategy = new WalkingStrategy();
navigator.routeStrategy(walkingStrategy);
navigator.buildRoute(1, 2);
