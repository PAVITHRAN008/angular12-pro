import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './core/guards/authGuard.guard';
import { userState } from './stateManagement/state/state.service';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor, ToastInterceptor } from './core/interceptor/app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SharedModule,
    HttpClientModule,
    NgxsModule.forRoot(
      [
        userState,
      ],
      { developmentMode: !environment.production }
    ),
    NgxsStoragePluginModule.forRoot({
      key: ['userDetails']
    })
  ],
  providers: [
    AuthGuard,
     { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
     { provide: HTTP_INTERCEPTORS, useClass: ToastInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
