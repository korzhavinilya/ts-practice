import Route from './interfaces/route.interface';

export default class AboutRoute implements Route {
  isMatch(path: string) {
    return path === '/about';
  }

  getSortOrder() {
    return 1;
  }

  handle() {
    console.log('AboutRoute.handle()');
  }
}
