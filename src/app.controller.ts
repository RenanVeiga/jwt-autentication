import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/guards/auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async logar(@Request() req) {
    return this.authService.login(req.user) ;
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@Request() req) {
    return {console: this.appService.getHello(), req: req.user};
  }


}
