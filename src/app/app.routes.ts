import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/components/home-page.component';
import { AuthorComponent } from './features/authors/components/author.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'authors',
        component: AuthorComponent
    }
];
