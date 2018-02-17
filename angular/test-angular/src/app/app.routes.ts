import { Routes } from '@angular/router';

import {LandingComponent } from './landing/landing.component';
import {BannerInlineComponent } from "./test/banner-inline/banner-inline.component";
import {TwainComponent} from "./test/twain/twain.component";
import {DashboardComponent} from "./test/dashboard/dashboard.component";

export const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'banner', component: BannerInlineComponent },
  { path: 'twain', component: TwainComponent },
  { path: 'dashboard', component: DashboardComponent}
];
