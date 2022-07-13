import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomAlertAddedComponent } from './bottom-alert-added.component';

describe('BottomAlertAddedComponent', () => {
  let component: BottomAlertAddedComponent;
  let fixture: ComponentFixture<BottomAlertAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomAlertAddedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomAlertAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
