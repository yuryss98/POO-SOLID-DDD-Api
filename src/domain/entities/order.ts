export default class Order {
  private id: number;

  private userId: number;

  private productsIds: number[];

  constructor() {
    this.userId = 0;
    this.productsIds = [];
    this.id = 0;
  }
}