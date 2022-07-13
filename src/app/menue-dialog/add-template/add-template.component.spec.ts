import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAddComponent } from './add-template.component';

describe('AddTemplateComponent', () => {
  let component: TemplateAddComponent;
  let fixture: ComponentFixture<TemplateAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
