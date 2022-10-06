import 'reflect-metadata';
import Logger from './common/loggger';
import AppFactory from './framework/app-factory';
import AppModule from './modules/app/app.module';
import AppService from './modules/app/app.service';
import ExampleService from './modules/example/example.service';
import RouterService from './modules/routing/router.service';

async function bootstrap() {
  const app = await AppFactory.create(AppModule);
  // const appService: AppService = app.get(AppService);
  // appService.run();

  const appModule: AppModule = app.get(AppModule);
  appModule.run();

  // const router: RouterService = app.use(RouterService);
  // router.execute('/');
  // router.execute('/about');
  // router.execute('/not-exists');

  // const logger: Logger = app.use(Logger);
  // logger.info('Application is running');
}

bootstrap();
