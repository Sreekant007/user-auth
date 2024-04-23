import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDTO } from './dto/User.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/')
  createUser(@Body() user: UserDTO) {
    return this.userService.userRegistration(user);
  }

  @Get('/')
  getAllUser() {
    return this.userService.getAllUsers();
  }
}
