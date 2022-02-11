import { Injectable } from '@angular/core';
import { UsersModule } from '../users.module';

@Injectable({
  providedIn: UsersModule
})
export class UsersService {

  constructor() { }
}
