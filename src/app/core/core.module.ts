import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToUpperCasePipe } from './pipes/to-upper-case.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HeadersInterceptor } from './interceptors/headers.interceptor';

@NgModule({
  declarations: [ToUpperCasePipe],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
