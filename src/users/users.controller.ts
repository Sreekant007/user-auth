import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserDTO } from './dto/User.dto';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Public } from 'src/auth/public.decorator';

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
