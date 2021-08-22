import { ComponentFixture, TestBed } from '@angular/core/testing';
import { textChangeRangeIsUnchanged } from 'typescript';
import { VistaEscrituraComponent } from './vista-escritura.component';

describe('VistaEscrituraComponent', () => {
  let component: VistaEscrituraComponent;
  let fixture: ComponentFixture<VistaEscrituraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaEscrituraComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEscrituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
