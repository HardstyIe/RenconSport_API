import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-auth0';

@Injectable()
export class Auth0Strategy extends PassportStrategy(Strategy, 'auth0') {
  constructor() {
    super({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL,
      audience: process.env.AUTH0_AUDIENCE,
      scope: 'openid profile email',
    });
  }

  validate(
    accessToken: string,
    refreshToken: string,
    extraParams: any,
    profile: any,
  ): any {
    return profile;
  }
}
