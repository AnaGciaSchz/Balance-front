import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddExpenseComponent } from './add-expense.component';
import { ExpenseService } from 'src/app/services/expenseService/expense.service';
import { ExpenseTableComponent } from '../expense-table/expense-table.component';

describe('AddExpenseComponent', () => {
  let component: AddExpenseComponent;
  let fixture: ComponentFixture<AddExpenseComponent>;
  let expenseService: ExpenseService;
  // let expenseTableComponent: ExpenseTableComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [AddExpenseComponent, ExpenseTableComponent],
      providers: [ExpenseService]
    }).compileComponents();

    fixture = TestBed.createComponent(AddExpenseComponent);
    component = fixture.componentInstance;
    expenseService = TestBed.inject(ExpenseService);

   // expenseTableComponent = fixture.debugElement.query(By.directive(ExpenseTableComponent)).componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/** 
  it('should add a new row to the table after saving an expense and clicking on the refresh button', () => {

    component.saveExpense();

    const refreshButton = fixture.debugElement.query(By.css('.refresh-button'));
    refreshButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    const tableRows = fixture.debugElement.queryAll(By.css('#expense-table tbody tr'));
    expect(tableRows.length).toBe(expenseTableComponent.expenses.length + 1);
  });
  */
});
