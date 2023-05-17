import { Component } from '@angular/core';
import { Expense } from '../../model/Expense';
import { ExpenseService } from '../../services/expenseService/expense.service';

@Component({
  selector: 'expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.css']
})
export class ExpenseTableComponent {
    expenses: Expense[] = [];

    constructor(private expenseService: ExpenseService) {}

    refreshExpenses() {
      this.expenseService.getExpenses().subscribe((expenses: Expense[]) => {
        this.expenses = expenses;
      });
    }    

  ngOnInit() {
    this.refreshExpenses()
    }
}
