import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlibroComponent } from './formlibro.component';

describe('FormlibroComponent', () => {
  let component: FormlibroComponent;
  let fixture: ComponentFixture<FormlibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormlibroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
