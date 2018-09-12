import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateStudentModalComponent } from './create-or-update-student-modal.component';

describe('CreateOrUpdateStudentModalComponent', () => {
  let component: CreateOrUpdateStudentModalComponent;
  let fixture: ComponentFixture<CreateOrUpdateStudentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateStudentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrUpdateStudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
