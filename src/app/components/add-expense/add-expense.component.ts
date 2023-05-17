import { Component,ViewChild, forwardRef } from '@angular/core';
import { ExpenseTableComponent } from '../expense-table/expense-table.component';
import {Expense} from '../../model/Expense'
import { ExpenseService } from '../../services/expenseService/expense.service';

@Component({
  selector: 'add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent{
  @ViewChild(forwardRef(() => ExpenseTableComponent), { static: false }) 
  public expenseTableComponent!: ExpenseTableComponent;

  constructor(private expenseService: ExpenseService) {}

  expense: Expense = {
    description:"",
    amount: 0,
    timestamp: new Date(),
    friend: ""
  };

  saveExpense() {
    this.expenseService.registerExpense(this.expense).subscribe(
      (response) => {
        console.log('Response Body:', response);
      },
      (error) => {
        alert('Invalid expenses information, make sure that you have entered a friend Id')
      }
    );
  }
}
