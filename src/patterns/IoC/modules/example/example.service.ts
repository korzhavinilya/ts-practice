import Injectable from '../../common/decorators/injectable.decorator';

@Injectable()
export default class ExampleService {
  run() {
    console.log('ExampleService.run()');
  }
}
