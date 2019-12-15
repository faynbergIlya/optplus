import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentViewComponent } from './content-view/content-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ContentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
