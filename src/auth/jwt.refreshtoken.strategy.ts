import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import {Injectable, UnauthorizedException, Body} from '@nestjs/common';
import {UsersService} from '../users/users.service';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(Strategy,"jwt-refreshtoken") {
  constructor(private userService:UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('access_token'),
      ignoreExpiration: true,
      secretOrKey: 'secret',
      passReqToCallback:true
    });
  }

  async validate(req,payload: any) {
    
    var user = await this.userService.findOne(payload.username);
    if(!user){
        throw new UnauthorizedException();
    }
    return { userId: payload.sub, username: payload.username };
  }
}
