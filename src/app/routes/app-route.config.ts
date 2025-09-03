import { Routes } from "@angular/router";
import { LandingComponent } from "../pages/landing/landing.component";
import { LoginComponent } from "../pages/login/login.component";

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'landing', component: LandingComponent },
    { path: '**', redirectTo: 'login' },
];