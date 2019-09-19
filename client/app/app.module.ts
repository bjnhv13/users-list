import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { EditRowComponent } from './components/data-row/data-row.component';
import { DisplayRowComponent } from './components/display-row/display-row.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersTableComponent,
    EditRowComponent,
    DisplayRowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
