import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ExpenseService } from './expense.service';
import { Expense } from '../../model/Expense';

describe('ExpenseService', () => {
  let service: ExpenseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExpenseService]
    });
    service = TestBed.inject(ExpenseService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should retrieve expenses', () => {
    const mockExpenses: any[] = [
      { description: 'Expense 1', amount: 10, timestamp: '2023-01-01', friend: { name: 'Friend 1' } },
      { description: 'Expense 2', amount: 20, timestamp: '2023-01-02', friend: { name: 'Friend 2' } }
    ];

    const expectedExpenses: Expense[] = [
      { description: 'Expense 1', amount: 10, timestamp: '2023-01-01', friend: 'Friend 1' },
      { description: 'Expense 2', amount: 20, timestamp: '2023-01-02', friend: 'Friend 2' }
    ];

    service.getExpenses().subscribe((expenses: Expense[]) => {
      expect(expenses).toEqual(expectedExpenses);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/v1/expenses');
    expect(req.request.method).toBe('GET');
    req.flush(mockExpenses);
  });

  it('should register an expense', () => {
    const expense: Expense = { description: 'Expense 1', amount: 10, timestamp: '2023-01-01', friend: 'Friend 1' };

    service.registerExpense(expense).subscribe((registeredExpense: Expense) => {
      expect(registeredExpense).toEqual(expense);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/v1/expenses');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(expense);
    req.flush(expense);
  });
});
