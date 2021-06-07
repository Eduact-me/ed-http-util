export default class Http {
  public static respond(
    responseObject: any,
    data?: object,
    message: string = '',
    statusCode: number = 200,
    meta?: object,
    showMessage?: boolean,
  ) {
    showMessage = typeof showMessage === 'boolean' ? showMessage : responseObject.request.method !== 'GET';
    const responseBody = {
      meta,
      data,
      message,
      showMessage,
    };
    return responseObject.status(statusCode).send(responseBody);
  }
}
