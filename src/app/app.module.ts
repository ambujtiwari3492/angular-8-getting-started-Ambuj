import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ChildrenComponent } from './children/children.component';
import { FetchComponent } from './fetch/fetch.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiDataService } from './api-data.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: FetchComponent },
     // { path: 'children/:id', component: ChildrenComponent },
     // {path: 'children', component: ChildrenComponent}
     { path: 'children', component: ChildrenComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    ChildrenComponent,
    TopBarComponent,
    ProductListComponent,
    FetchComponent,
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
