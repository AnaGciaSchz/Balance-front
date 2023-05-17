import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expense } from '../../model/Expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private url = 'http://localhost:8080/api/v1/expenses';

  constructor(private http: HttpClient) { }

  getExpenses(): Observable<Expense[]> {
    return this.http.get<any[]>(this.url)
      .pipe(
        map((expenses: any[]) => expenses.map((expense: any) => (
          {
          description: expense.description,
          amount: expense.amount,
          timestamp: new Date(expense.timestamp),
          friend: expense.friend.name
        } as Expense)))
      ) 
  }

  registerExpense(expense: Expense): Observable<Expense> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Expense>(this.url, expense, httpOptions);
  }
}
