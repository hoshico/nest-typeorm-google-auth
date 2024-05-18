import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly googleClient: OAuth2Client;
  constructor() {
    this.googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  }
  async use(
    req: Request & { user: { name: string; email: string } },
    _res: Response,
    next: NextFunction,
  ) {
    const auth = req.headers['authorization'];

    if (!auth) {
      throw new UnauthorizedException('Unauthorized');
    }

    const items = auth.split(' ');

    const idToken = items[1];

    if (!idToken) {
      throw new UnauthorizedException('Unauthorized');
    }

    try {
      const ticket = await this.googleClient.verifyIdToken({
        idToken: idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      const user = {
        name: payload.name,
        email: payload.email,
      };
      req.user = user;

      next();
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException('Unauthorized');
    }
  }
}
