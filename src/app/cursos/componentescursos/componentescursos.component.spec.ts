import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentescursosComponent } from './componentescursos.component';

describe('ComponentescursosComponent', () => {
  let component: ComponentescursosComponent;
  let fixture: ComponentFixture<ComponentescursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentescursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentescursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
