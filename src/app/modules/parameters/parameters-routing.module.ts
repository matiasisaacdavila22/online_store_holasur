import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandCreationComponent } from './brand/brand-creation/brand-creation.component';
import { BrandEditionComponent } from './brand/brand-edition/brand-edition.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { CaregoryCreationComponent } from './category/caregory-creation/caregory-creation.component';
import { CaregoryEditionComponent } from './category/caregory-edition/caregory-edition.component';
import { CaregoryListComponent } from './category/caregory-list/caregory-list.component';
import { CaregoryRemoveComponent } from './category/caregory-remove/caregory-remove.component';

const routes: Routes = [
  {
    path: 'category-list',
    component: CaregoryListComponent
  },
  {
    path: 'category-creation',
    component: CaregoryCreationComponent
  },
  {
    path: 'category-edition',
    component: CaregoryEditionComponent
  },
  {
    path: 'category-remove',
    component: CaregoryRemoveComponent
  },
  {
    path: 'brand-list',
    component: BrandListComponent
  },
  {
    path: 'brand-creation',
    component: BrandCreationComponent
  },
  {
    path: 'brand-edition',
    component: BrandEditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
