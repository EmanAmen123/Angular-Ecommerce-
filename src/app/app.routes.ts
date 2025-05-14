import { Routes } from '@angular/router';
import { AuthlayoutComponent } from './Components/LayOuts/authlayout/authlayout.component';
import { BlanklayoutComponent } from './Components/LayOuts/blanklayout/blanklayout.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CartComponent } from './Components/cart/cart.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { logedGuard } from './Core/Guards/Logged/loged.guard';
import { authGuard } from './Core/Guards/Auth/auth.guard';

export const routes: Routes = [
    {path:'',component:AuthlayoutComponent,canActivate:[logedGuard] ,children:[
        {path:'',redirectTo:'login',pathMatch:'full'},
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent}
    ]},
    {path:'',component:BlanklayoutComponent,canActivate:[authGuard],children:[
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'home',component:HomeComponent},
        {path:'products',component:ProductsComponent},
        {path:'categories',component:CategoriesComponent},
        {path:'cart',component:CartComponent},
        {path:'brands',component:BrandsComponent},

    ]},
    {path:'**',component:NotfoundComponent}
];
