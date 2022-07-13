import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomAlertComponent } from './bottom-alert.component';

describe('BottomAlertComponent', () => {
  let component: BottomAlertComponent;
  let fixture: ComponentFixture<BottomAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
