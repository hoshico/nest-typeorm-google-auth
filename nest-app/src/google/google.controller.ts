import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { GoogleService } from './google.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}
  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Request() req) {
    console.log(req);
  }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Request() req) {
    console.log('user情報: ', req.user);
    // TODO: user情報を使用してjwtを渡す
    return this.googleService.googleLogin(req);
  }
}
