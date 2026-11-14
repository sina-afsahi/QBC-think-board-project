export interface ResponseType<T> {
  success: boolean;
  status: number;
  response: T;
}