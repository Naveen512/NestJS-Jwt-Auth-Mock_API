import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

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
  getTodos() {
    return ['Watch Movie', 'Take Health Test', 'Play Cricket'];
  }

  @UseGuards(AuthGuard('jwt-refreshtoken'))
  @Post('auth/refreshtoken')
  async refreshToken(@Request() req) {
    return await this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user/fav-movies')
  getFavMovies() {
    return [
      {
        id: 1,
        name: 'Iron Man 1',
        genre: 'Action & Fiction',
      },
      {
        id: 2,
        name: 'A Quiet Place',
        genre: 'Horror',
      },
      {
        id: 3,
        name: 'Joker',
        genre: 'Drama'
      },
      {
        id:4,
        name:'Ted',
        genre: 'Comedy'
      }
    ];
  }
}
