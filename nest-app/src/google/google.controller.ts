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
    return this.googleService.googleLogin(req);
  }
}
