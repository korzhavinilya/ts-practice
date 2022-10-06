import ExampleService from './example.service';
import Module from '../../common/decorators/module.decorator';

@Module({
  providers: [ExampleService],
})
export default class ExampleModule {}
