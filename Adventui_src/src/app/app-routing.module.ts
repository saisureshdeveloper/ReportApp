import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AccountModule, HomeModule } from './modules';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
    {
        path: 'login',
        loadChildren: './modules/account/account.module#AccountModule'
        // loadChildren: () => AccountModule
    },
    {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule',
        // loadChildren: () => HomeModule,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true, enableTracing: false })
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
