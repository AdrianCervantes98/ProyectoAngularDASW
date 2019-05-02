import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsMainComponent } from './admins-main.component';

describe('AdminsMainComponent', () => {
  let component: AdminsMainComponent;
  let fixture: ComponentFixture<AdminsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
