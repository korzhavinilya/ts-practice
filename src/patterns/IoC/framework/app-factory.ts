import ProviderKey from '../common/enums/provider-key.enum';
import ProviderType from '../common/enums/provider-type.enum';
import Container from './container';

export default class AppFactory {
  static async create(module: any) {
    const container = new Container();
    this.initialize(container, module);
    return container;
  }

  private static initialize(container: Container, module: any) {
    const isInstanceExists = !!this.getInstance(container, module);

    if (isInstanceExists) {
      return;
    }

    const providerType = Reflect.getMetadata(ProviderKey.TYPE, module);

    if (providerType === ProviderType.MODULE) {
      const { providers, imports } = Reflect.getMetadata(
        ProviderKey.METADATA,
        module
      );

      for (const provider of providers) {
        this.initialize(container, provider);
      }

      for (const imp of imports || []) {
        this.initialize(container, imp);
      }
    }

    const parameters =
      Reflect.getMetadata(ProviderKey.PARAMETERS, module) || [];

    const args = parameters.map((parameter) => {
      const instance = this.getInstance(container, parameter);
      return instance ? instance : new parameter();
    });

    container.singleton(module, () => new module(...args));
  }

  private static getInstance(container: Container, module: any) {
    let instance: any;

    try {
      instance = container.get(module);
    } catch (error) {
      instance = undefined;
    }

    return instance;
  }
}
