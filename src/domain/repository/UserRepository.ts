import { IUserCreate, IUserDTO } from '../use-cases/IUser';

export interface IUserPersistence {
  insert(user: IUserCreate): Promise<number>
  findByName(username: string): Promise<IUserDTO>
}

export default class UserRepository {
  constructor(private persistence: IUserPersistence) {}

  async insert(user: IUserCreate) {
    const userId = await this.persistence.insert(user);
    return userId;
  }

  async findByName(username: string) {
    const user = await this.persistence.findByName(username);
    return user;
  }
}