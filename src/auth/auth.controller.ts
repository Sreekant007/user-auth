import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDto } from './dto/AuthLoginDto';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/login')
  createUser(@Body() loginParam: AuthLoginDto) {
    return this.authService.userLogin(loginParam);
  }
}
