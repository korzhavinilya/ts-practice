import Route from './interfaces/route.interface';

export default class NotFoundRoute implements Route {
  isMatch() {
    return true;
  }

  getSortOrder() {
    return 999999;
  }

  handle() {
    console.log('NotFoundRoute.handle()');
  }
}
