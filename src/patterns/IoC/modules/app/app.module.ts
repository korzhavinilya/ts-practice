import Module from '../../common/decorators/module.decorator';
import ExampleModule from '../example/example.module';
import ExampleService from '../example/example.service';
import AppService from './app.service';

@Module({
  providers: [AppService],
  imports: [ExampleModule],
})
export default class AppModule {
  constructor(
    private readonly exampleService: ExampleService,
    private readonly appService: AppService
  ) {}

  run() {
    console.log('AppModule.run()');
    this.appService.run();
    this.exampleService.run();
  }
}
