import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LandingComponent } from './landing/landing.component';
import { BannerInlineComponent } from './test/banner-inline/banner-inline.component';
import { UserService } from "./test/user.service";
import { TwainService } from "./test/twain/twain.service";
import { TwainComponent } from './test/twain/twain.component';
import { DashboardComponent } from './test/dashboard/dashboard.component';
import { DashboardHeroComponent } from './test/dashboard/dashboard-hero/dashboard-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BannerInlineComponent,
    TwainComponent,
    DashboardComponent,
    DashboardHeroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    TwainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
