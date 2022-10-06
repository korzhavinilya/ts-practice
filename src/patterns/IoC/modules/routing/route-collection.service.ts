import Container from '../../framework/container';
import Route from './interfaces/route.interface';

export default class RouteCollectionService {
  private routes: Route[];

  constructor(container: Container) {
    this.routes = [];
  }

  getRoutes() {
    return [...this.routes];
  }

  add(route: Route) {
    this.routes.push(route);
  }
}
