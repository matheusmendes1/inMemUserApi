import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private usersList: User[] = [];
  private nextId = 1;

  createUser(name: string, email: string): User {
    const newUser: User = {
      id: this.nextId++,
      name,
      email,
    };
    this.usersList.push(newUser);
    return newUser;
  }

  getAllUsers(): User[] {
    return this.usersList;
  }

  getUserById(id: number): User {
    const user = this.usersList.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException('User not found in memory.');
    }
    return user;
  }

  deleteUser(id: number): { message: string } {
    const index = this.usersList.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException('User not found in memory.');
    }
    
    this.usersList.splice(index, 1);
    return { message: 'User successfully deleted.' };
  }
}