import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Components
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { MachineComponent } from './pages/machine/machine.component';

const routes: Routes = [
    // Root
    { path: '', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'machine', component: MachineComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
