export default class Http {
  public static respond(
    responseObject: any,
    data?: object,
    message: string = '',
    statusCode: number = 200,
    meta?: object,
  ) {
    const responseBody = {
      meta,
      data,
      message,
    };
    return responseObject.status(statusCode).send(responseBody);
  }
}
