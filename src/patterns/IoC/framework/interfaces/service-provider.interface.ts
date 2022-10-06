import Container from '../container';

export default interface ServiceProvider {
  register(container: Container): void;
}
