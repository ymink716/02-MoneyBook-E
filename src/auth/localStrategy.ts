import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
// Passport 전략의 동작을 사용자화합니다.
// passport-local의 사용 사례에는 구성 옵션이 없으므로 생성자 supe()은 옵션 객체 없이 단순히 호출합니다.
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: false, // 인증을 수행하는 인증 함수로 HTTP request를 그대로 전달할지 여부를 결정
    });
  }

  // 사용자가 존재하고 유효한지 확인합니다.
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser({ email, password });
    if (!user) {
      throw new UnauthorizedException();
    }
    delete user.password;
    return user;
  }
}
