import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from '../../common/baseResponse.dto';
import { MoneyBook } from '../entities/moneyBook.entity';

export abstract class ResponseData {
  @ApiProperty()
  moneyBook: MoneyBook;
}

export abstract class MoneyBookResponse extends BaseResponse {
  constructor() {
    super();
  }

  @ApiProperty()
  data: ResponseData;
}
