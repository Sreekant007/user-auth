import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDTO } from './dto/User.dto';
import { UsersService } from './users.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/')
  @ApiResponse({ status: 200, description: 'Register new user' })
  @ApiResponse({
    status: 400,
    description: 'User Already Registered',
  })
  createUser(@Body() user: UserDTO) {
    return this.userService.userRegistration(user);
  }

  @Get('/')
  getAllUser() {
    return this.userService.getAllUsers();
  }
}
