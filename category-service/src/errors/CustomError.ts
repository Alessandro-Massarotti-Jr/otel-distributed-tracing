interface ICustomErrorDTO {
  httpStatusCode?: number;
  ignorable?: boolean;
  message: string;
  original?: any;
}

export class CustomError extends Error {
  public message: string;
  public httpStatusCode: number;
  public ignorable: boolean;
  private original?: any;

  constructor({
    message,
    httpStatusCode = 500,
    ignorable = false,
    original,
  }: ICustomErrorDTO) {
    super();
    this.message = message;
    this.httpStatusCode = httpStatusCode;
    this.ignorable = ignorable;
    this.original = original;
  }

  public toClient() {
    return {
      message: this.message,
      original: this.original,
    };
  }
}
