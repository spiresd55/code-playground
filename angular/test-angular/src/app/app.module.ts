import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LandingComponent } from './landing/landing.component';
import { BannerInlineComponent } from './test/banner-inline/banner-inline.component';
import { UserService } from "./test/user.service";
import { TwainComponent } from './test/twain/twain.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BannerInlineComponent,
    TwainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
