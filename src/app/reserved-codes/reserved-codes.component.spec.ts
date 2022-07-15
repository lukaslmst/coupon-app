import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedCodesComponent } from './reserved-codes.component';

describe('ReservedCodesComponent', () => {
  let component: ReservedCodesComponent;
  let fixture: ComponentFixture<ReservedCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservedCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservedCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
