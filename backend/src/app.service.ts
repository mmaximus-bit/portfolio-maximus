import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    
    return{

      message: 'Olá, eu sou o Back-End!',
      author: 'mmaximus-bit'
    };
  }
}
