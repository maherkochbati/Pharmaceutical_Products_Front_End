import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ChangePasswordGuard } from '../shared/guard/change-password.guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordModule' , canActivate: [ChangePasswordGuard]},
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
           
            
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'add-user', loadChildren: './add-user/add-user.module#AddUserModule'},
            { path: 'update-user/:id', loadChildren: './update-user/update-user.module#UpdateUserModule'},
            { path: 'users', loadChildren: './users/users.module#UsersModule'},
            { path: 'user-detail/:id', loadChildren: './user-detail/user-detail.module#UserDetailModule'},
            { path: 'roles', loadChildren: './roles/roles.module#RolesModule' },
            { path: 'validate-password', loadChildren: './validate-password/validate-password.module#ValidatePasswordModule' },
            { path: 'add-pharmacie', loadChildren: './add-pharmacie/add-pharmacie.module#AddPharmacieModule'},
            { path: 'pharmacies', loadChildren: './pharmacies/pharmacies.module#PharmaciesModule'},
            { path: 'pharmacie-detail/:id', loadChildren: './pharmacie-detail/pharmacie-detail.module#PharmacieDetailModule'},
            { path: 'update-pharmacie/:id', loadChildren: './update-pharmacie/update-pharmacie.module#UpdatePharmacieModule'}

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
