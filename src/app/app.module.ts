import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

@NgModule({
  declarations: [MyApp],
  entryComponents: [MyApp],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, StatusBar, SplashScreen],
  bootstrap: [IonicApp]
})
export class AppModule {}
