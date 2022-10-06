import Route from './interfaces/route.interface';

export default class HomeRoute implements Route {
  isMatch(path: string) {
    return path === '/';
  }

  getSortOrder() {
    return 0;
  }

  handle() {
    console.log('HomeRoute.handle()');
  }
}
