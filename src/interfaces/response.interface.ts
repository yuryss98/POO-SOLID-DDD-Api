export interface ResponseOfSuccess<T> {
  type: string;
  message: T
}

export interface ResponseOfError {
  type: string;
  message: string | { message: string }
}