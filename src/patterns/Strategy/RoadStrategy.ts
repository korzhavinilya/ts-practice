import RouteStrategy from './interfaces/route.strategy';

export default class RoadStrategy implements RouteStrategy {
  buildRoute(a: number, b: number): number {
    console.log('Build road route');
    return 1;
  }
}
