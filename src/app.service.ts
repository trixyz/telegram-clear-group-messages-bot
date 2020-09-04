import { 
  Injectable, 
  OnApplicationBootstrap,
  HttpService
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';
// import { getManager } from 'typeorm';
// import { Message } from './typeOrmEntities/message';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private httpService: HttpService, private configService: ConfigService){}

  getHello(): string {
    return 'Hello World!';
  }

  onApplicationBootstrap(): Promise<Observable<AxiosResponse>> {
    const token = this.configService.get<string>('BOT_TOKEN');
    const response = this.httpService.get(`https://api.telegram.org/bot${token}/getMe`);
    response.subscribe({
      next(x) {
        console.log(x.data);
      }
    })
    // const manager = getManager();
    // const msg = await manager.create(Message);
    // msg.datePosted = new Date();
    // msg.ignore = false;
    // await manager.save(msg);
    return Promise.resolve(response);
  }
}
