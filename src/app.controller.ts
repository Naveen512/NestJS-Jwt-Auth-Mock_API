import { Controller, Request, Post, UseGuards,Get } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport'

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('todos')
  getTodos(){
    return ['Watch Movie', 'Take Health Test', 'Play Cricket'];
  }

  @UseGuards(AuthGuard('jwt-refreshtoken'))
  @Post('auth/refreshtoken')
  async refreshToken(@Request() req){
    return await this.authService.login(req.user);
  }
}