import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddEditEmpComponent } from './add-edit-emp.component';

describe('AddEditEmpComponent', () => {
  let component: AddEditEmpComponent;
  let fixture: ComponentFixture<AddEditEmpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
