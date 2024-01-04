import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLineItemComponent } from './view-line-item.component';

describe('ViewLineItemComponent', () => {
  let component: ViewLineItemComponent;
  let fixture: ComponentFixture<ViewLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLineItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
