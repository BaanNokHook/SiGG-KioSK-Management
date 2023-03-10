import { AssortedComponent } from './assorted/assorted.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderImageComponent } from './home/header-image/header-image.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './global/navbar/navbar.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DisplayItemsComponent } from './admin/display-items/display-items.component';
import { AddOrEditItemsComponent } from './admin/add-or-edit-items/add-or-edit-items.component';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { AuthGuard } from './route-guards/auth-guard.service';
import { AdminAuthGuard } from './route-guards/admin-auth-guard.service';
import { CustomerAuthGuard } from './route-guards/customer-auth-guard.service';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { DisplayOrdersComponent } from './admin/display-orders/display-orders.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { BeefComponent } from './beef/beef.component';
import { ChickenComponent } from './chicken/chicken.component';
import { DuckComponent } from './duck/duck.component';
import { HBallsComponent } from './hballs/hballs.component';
import { HomemadePasteComponent } from './homemade-paste/homemade-paste.component';
import { HomDummplingComponent } from './hom-dummpling/hom-dummpling.component';
import { BeancurdComponent } from './beancurd/beancurd.component';
import { MushroomComponent } from './mushroom/mushroom.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { OtherComponent } from './other/other.component';
import { RiceNComponent } from './rice-n/rice-n.component';
import { SoftDComponent } from './soft-d/soft-d.component';
import { AlcoholComponent } from './alcohol/alcohol.component';
import { SeafoodComponent } from './seafood/seafood.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 100]
};

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
  {
    path: 'profile/:name',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/items',
    component: DisplayItemsComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/items/add',
    component: AddOrEditItemsComponent,
    data: { path: 'add' },
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/items/edit/:itemCategory/:itemId',
    component: AddOrEditItemsComponent,
    data: { path: 'edit' },
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/manage-orders',
    component: ManageOrdersComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/:uid/orders',
    component: DisplayOrdersComponent,
    canActivate: [AdminAuthGuard]
  },
  // {
  //   path: 'menu-page',
  //   component: CategoryPageComponent
  // },
  {
    path: 'menu-page',
    component: CategoriesComponent
  },
  {
    path: 'Category-page',
    component: CategoryPageComponent
  },
  {
    path: 'Assorted',
    component: AssortedComponent
  },
  {
    path: 'Beef',
    component: BeefComponent
  },
  {
    path: 'Chicken',
    component: ChickenComponent
  },
  {
    path: 'Duck',
    component: DuckComponent
  },
  {
    path: 'Seafood',
    component: SeafoodComponent
  },
  {
      path: 'HBalls',
      component: HBallsComponent
  },
  {
      path: 'HomemadePaste',
      component: HomemadePasteComponent
  },
  {
      path: 'HomDummpling',
      component: HomDummplingComponent
  },
  {
      path: 'Beancurd',
      component: BeancurdComponent
  },
  {
      path: 'Mushroom',
      component: MushroomComponent
  },
  {
      path: 'Vegetable',
      component: VegetableComponent
  },
  {
      path: 'Other',
      component: OtherComponent
  },
  {
      path: 'RiceN',
      component: RiceNComponent
  },
  {
      path: 'SoftD',
      component: SoftDComponent
  },
  {
      path: 'Alcohol',
      component: AlcoholComponent
  },
  {
      path: 'cart',
      component: CartPageComponent
  },
  {
        path: 'orders',
      component: OrderPageComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'confirm-order',
      component: ConfirmOrderComponent,
      canActivate: [AuthGuard]
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
