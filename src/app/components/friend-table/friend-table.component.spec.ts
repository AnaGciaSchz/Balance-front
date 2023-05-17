import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FriendTableComponent } from './friend-table.component';

describe('FriendTableComponent', () => {
  let component: FriendTableComponent;
  let fixture: ComponentFixture<FriendTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [FriendTableComponent]
    });
    fixture = TestBed.createComponent(FriendTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
