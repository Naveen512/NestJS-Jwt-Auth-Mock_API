import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'test',
        password: '1234',
        email:'test@test.com'
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
        email:'test@test2.com'
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
        email:'test@test3.com'
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}