import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDto } from './dto/AuthLoginDto';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/login')
  @ApiResponse({ status: 200, description: 'Login User and get auth token' })
  @ApiResponse({
    status: 400,
    description: 'Password not match or user not exist',
  })
  createUser(@Body() loginParam: AuthLoginDto) {
    return this.authService.userLogin(loginParam);
  }
}
