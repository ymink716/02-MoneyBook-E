import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/user/dto/login.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // 유저가 존재하는지, 비밀번호가 맞는지 확인 -> validateUser()
  // JWT 생성을 다룬다.
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(user: LoginDto): Promise<any> {
    return;
  }
}
