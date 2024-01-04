import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLineItemComponent } from './update-line-item.component';

describe('UpdateLineItemComponent', () => {
  let component: UpdateLineItemComponent;
  let fixture: ComponentFixture<UpdateLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLineItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
