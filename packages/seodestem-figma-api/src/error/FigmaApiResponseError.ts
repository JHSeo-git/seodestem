export default class FigmaApiResponseError extends Error {
  status: number;
  options: { [config: string]: string };
  constructor(message: string, status: number, options: any) {
    super(message);

    this.status = status;
    this.options = options;
  }
}
