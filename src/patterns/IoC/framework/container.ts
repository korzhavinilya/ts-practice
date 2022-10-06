import ServiceProvider from './interfaces/service-provider.interface';
import { HandlerType } from './types/handler-type.type';
import { ResolverType } from './types/resolver-type.type';

export default class Container {
  private resolvers: Map<any, ResolverType>;
  private singletons: Map<any, boolean>;
  private handlers: Map<any, HandlerType[]>;
  private instances: Map<any, ResolverType[]>;

  constructor() {
    this.resolvers = new Map();
    this.singletons = new Map();
    this.handlers = new Map();
    this.instances = new Map();
  }

  get(token: any) {
    const resolver = this.resolvers.get(token);

    if (!resolver) {
      throw new Error(`Resolver for token ${token} doesn't exist`);
    }

    if (this.instances.has(token)) {
      return this.instances.get(token);
    }

    let instance = resolver(this);

    const handlers = this.handlers.get(token) || [];

    for (const handler of handlers) {
      instance = handler({ instance, container: this });
    }

    if (this.singletons.get(token)) {
      this.instances.set(token, instance);
    }

    return instance;
  }

  bind(token: any, resolver: ResolverType) {
    this.resolvers.set(token, resolver);
  }

  singleton(token: any, resolver: ResolverType) {
    this.singletons.set(token, true);
    this.bind(token, resolver);
  }

  resolving(token: any, handler: HandlerType) {
    const existingHandles = this.handlers.get(token);
    if (!existingHandles) {
      this.handlers.set(token, [handler]);
    } else {
      this.handlers.set(token, [...existingHandles, handler]);
    }
  }

  register(serviceProvider: ServiceProvider) {
    serviceProvider.register(this);
  }
}
