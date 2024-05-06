import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
            },
            {
                path: '',
                loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }