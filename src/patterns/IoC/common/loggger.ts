export default abstract class Logger {
  abstract debug(...messages: string[]): void;
  abstract info(...messages: string[]): void;
  abstract error(...messages: string[]): void;
}
