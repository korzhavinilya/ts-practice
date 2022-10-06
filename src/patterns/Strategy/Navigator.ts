import RouteStrategy from './interfaces/route.strategy';

export default class Navigator implements RouteStrategy {
  constructor(private strategy: RouteStrategy) {}

  routeStrategy(strategy: RouteStrategy) {
    this.strategy = strategy;
  }

  buildRoute(a: number, b: number): number {
    return this.strategy.buildRoute(a, b);
  }
}
