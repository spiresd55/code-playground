import { Routes } from '@angular/router';

import {LandingComponent } from './landing/landing.component';
import {BannerInlineComponent } from "./test/banner-inline/banner-inline.component";

export const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'banner', component: BannerInlineComponent }
];
