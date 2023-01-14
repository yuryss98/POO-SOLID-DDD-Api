export interface IUserCredentials {
  username: string;
  password: string;
}

export interface IUserCreate extends IUserCredentials {
  vocation: string;
  level: number;
}

export interface IUserDTO extends IUserCreate {
  id: number
}