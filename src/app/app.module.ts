import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseTableComponent } from './components/expense-table/expense-table.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { AddFriendComponent } from './components/add-friend/add-friend.component';
import { FriendTableComponent } from './components/friend-table/friend-table.component';
import { PayMapComponent } from './components/pay-map/pay-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseTableComponent,
    AddExpenseComponent,
    AddFriendComponent,
    FriendTableComponent,
    PayMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
