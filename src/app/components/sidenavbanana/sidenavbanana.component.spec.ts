import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavbananaComponent } from './sidenavbanana.component';

describe('SidenavbananaComponent', () => {
  let component: SidenavbananaComponent;
  let fixture: ComponentFixture<SidenavbananaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavbananaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavbananaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
