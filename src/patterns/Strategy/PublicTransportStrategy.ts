import RouteStrategy from './interfaces/route.strategy';

export default class PublicTransportStrategy implements RouteStrategy {
  buildRoute(a: number, b: number): number {
    console.log('Build public transport route');
    return 3;
  }
}
