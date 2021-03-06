import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: 'authors',
        loadChildren: 'app/author/author.module#AuthorModule',
        data: { title: 'Authors' }
    },
    {
        path: 'courses',
        loadChildren: 'app/course/course.module#CourseModule',
        data: { title: 'Courses' }
    },
    {
        path: '**',
        redirectTo: '/authors',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: NoPreloading
  });