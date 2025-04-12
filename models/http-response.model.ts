export type HttpResponse<T = unknown> = {
  errorCode: string;
  message: string;
  success: boolean;
  data: T;
};
