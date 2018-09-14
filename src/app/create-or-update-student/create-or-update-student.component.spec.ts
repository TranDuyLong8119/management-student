import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateStudentComponent } from './create-or-update-student.component';

describe('CreateOrUpdateStudentComponent', () => {
  let component: CreateOrUpdateStudentComponent;
  let fixture: ComponentFixture<CreateOrUpdateStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrUpdateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
