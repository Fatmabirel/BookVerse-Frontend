import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/components/home-page.component';
import { AuthorComponent } from './features/authors/components/author.component';
import { CategoryComponent } from './features/categories/components/category.component';
import { BookComponent } from './features/books/components/book.component';
import { FaqComponent } from './features/faq/faq.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'authors',
        component: AuthorComponent
    },
    {
        path: 'categories',
        component: CategoryComponent
    },
    {
        path: 'books',
        component: BookComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    
];
