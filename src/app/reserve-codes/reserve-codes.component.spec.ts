import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveCodesComponent } from './reserve-codes.component';

describe('ReserveCodesComponent', () => {
  let component: ReserveCodesComponent;
  let fixture: ComponentFixture<ReserveCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
