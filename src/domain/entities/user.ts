export default class User {
  private id: number;

  private username: string;

  private vocation: string;

  private level: number;

  private password: string;

  constructor() {
    this.id = 0;
    this.username = '';
    this.vocation = '';
    this.level = 0;
    this.password = '';
  }
}