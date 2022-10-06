import Injectable from '../../common/decorators/injectable.decorator';
import ExampleService from '../example/example.service';

@Injectable()
export default class AppService {
  constructor(private readonly exampleService: ExampleService) {}

  run() {
    console.log('AppService.run()');
    this.exampleService.run();
  }
}
