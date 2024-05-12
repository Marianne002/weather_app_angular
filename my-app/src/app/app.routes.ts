// app.routes.ts
import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HistoryComponent } from './pages/history/history.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'history', component: HistoryComponent},
    { path: 'cgu', component: CguComponent},


    // Route 404
    { path: '**', component: NotFoundComponent}
];
