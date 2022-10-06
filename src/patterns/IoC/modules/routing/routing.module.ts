import Container from '../../framework/container';
import ServiceProvider from '../../framework/interfaces/service-provider.interface';
import AboutRoute from './about.route';
import HomeRoute from './home.route';
import NotFoundRoute from './not-found.route';
import RouteCollectionService from './route-collection.service';
import RouterService from './router.service';

export default class RoutingModule implements ServiceProvider {
  register(container: Container): void {
    container.singleton(RouterService, () => new RouterService(container));
    container.singleton(
      RouteCollectionService,
      () => new RouteCollectionService(container)
    );

    container.resolving(RouteCollectionService, ({ instance, container }) => {
      const collection: RouteCollectionService = instance;
      collection.add(new HomeRoute());
      return collection;
    });

    container.resolving(RouteCollectionService, ({ instance, container }) => {
      const collection: RouteCollectionService = instance;
      collection.add(new AboutRoute());
      return collection;
    });

    container.resolving(RouteCollectionService, ({ instance, container }) => {
      const collection: RouteCollectionService = instance;
      collection.add(new NotFoundRoute());
      return collection;
    });
  }
}
