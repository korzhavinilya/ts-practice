export class HttpError extends Error {
  status: number;
  errors: string[];

  constructor(status: number, message: string, errors: string[] = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message: string) {
    return new HttpError(400, message);
  }

  static UnauthorizedError() {
    return new HttpError(401, "User isn't authorized");
  }
}

const error1 = HttpError.BadRequest('Invalid token');
const error2 = HttpError.UnauthorizedError();
