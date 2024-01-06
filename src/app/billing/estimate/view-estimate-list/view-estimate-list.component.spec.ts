import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEstimateListComponent } from './view-estimate-list.component';

describe('ViewEstimateComponent', () => {
  let component: ViewEstimateListComponent;
  let fixture: ComponentFixture<ViewEstimateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEstimateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEstimateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
