import ProviderKey from '../enums/provider-key.enum';
import ProviderType from '../enums/provider-type.enum';
import { ModuleMetadata } from '../interfaces/module-metadata.interface';

export default function Module(metadata: ModuleMetadata): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(ProviderKey.TYPE, ProviderType.MODULE, target);
    Reflect.defineMetadata(ProviderKey.METADATA, metadata, target);
  };
}
