import {Injectable} from '@nestjs/common';
import {User} from "./user";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUser(id: number) {
    //TODO: get data from db
    return new User(id, 'vova')
  }
}
