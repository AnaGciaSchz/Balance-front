import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PayMapComponent } from './pay-map.component';

describe('PayMapComponent', () => {
  let component: PayMapComponent;
  let fixture: ComponentFixture<PayMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [PayMapComponent]
    });
    fixture = TestBed.createComponent(PayMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
