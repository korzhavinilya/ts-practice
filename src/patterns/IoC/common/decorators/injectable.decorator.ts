import ProviderKey from '../enums/provider-key.enum';
import ProviderType from '../enums/provider-type.enum';

export default function Injectable(): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(ProviderKey.TYPE, ProviderType.INJECTABLE, target);
  };
}
