import Logger from '../../common/loggger';
import Container from '../../framework/container';
import ServiceProvider from '../../framework/interfaces/service-provider.interface';
import ConsoleLoggerService from './console-logger.service';

export default class ConsoleLoggerModule implements ServiceProvider {
  register(container: Container) {
    container.singleton(Logger, () => new ConsoleLoggerService());
  }
}
