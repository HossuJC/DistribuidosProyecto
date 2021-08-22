import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaLecturaComponent } from './vista-lectura.component';

describe('VistaLecturaComponent', () => {
  let component: VistaLecturaComponent;
  let fixture: ComponentFixture<VistaLecturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaLecturaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaLecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
