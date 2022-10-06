import RouteStrategy from './interfaces/route.strategy';

export default class WalkingStrategy implements RouteStrategy {
  buildRoute(a: number, b: number): number {
    console.log('Build walking route');
    return 2;
  }
}
