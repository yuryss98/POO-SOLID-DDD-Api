export interface ResponseOfSuccess<T> {
  type: string;
  message: T
}

// string
//   | { userId: number }
//   | Product
//   | Product[]
//   | Order
//   | Order[]
//   | { message: string }
//   | { token: string };

export interface ResponseOfError {
  type: string;
  message: string | { message: string }
}