import Container from '../../framework/container';
import RouteCollectionService from './route-collection.service';

export default class RouterService {
  private collection: RouteCollectionService;

  constructor(container: Container) {
    this.collection = container.get(RouteCollectionService);
  }

  init() {
    console.log('RouterService.init()');
  }

  execute(path: string) {
    const routes = this.collection.getRoutes();
    routes.sort((a, b) => a.getSortOrder() - b.getSortOrder());

    for (const route of routes) {
      if (route.isMatch(path)) {
        return route.handle();
      }
    }

    throw new Error('Route not found');
  }
}
