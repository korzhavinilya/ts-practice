import Logger from '../../common/loggger';

export default class ConsoleLoggerService implements Logger {
  debug(...messages: string[]) {
    console.log(messages);
  }

  info(...messages: string[]) {
    console.log(messages);
  }

  error(...messages: string[]) {
    console.error(messages);
  }
}
