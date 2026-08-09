import { Controller, Get, Post, Body, Param, Delete, HttpCode } from '@nestjs/common';
import { UsersService, User } from './users.services';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  create(@Body() body: { name: string; email: string }): User {
    return this.usersService.createUser(body.name, body.email);
  }

  @Get()
  findAll(): User[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User {
    return this.usersService.getUserById(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.deleteUser(Number(id));
  }
}