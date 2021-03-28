import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CaregoryCreationComponent } from './category/caregory-creation/caregory-creation.component';
import { CaregoryEditionComponent } from './category/caregory-edition/caregory-edition.component';
import { CaregoryListComponent } from './category/caregory-list/caregory-list.component';
import { CaregoryRemoveComponent } from './category/caregory-remove/caregory-remove.component';
import { BrandCreationComponent } from './brand/brand-creation/brand-creation.component';
import { BrandEditionComponent } from './brand/brand-edition/brand-edition.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';


@NgModule({
  declarations: [CaregoryCreationComponent, CaregoryEditionComponent, CaregoryListComponent, CaregoryRemoveComponent, BrandCreationComponent, BrandEditionComponent, BrandListComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
