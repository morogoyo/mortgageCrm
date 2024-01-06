import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientComponentList } from './view-client-list.component';

describe('ViewClientComponent', () => {
  let component: ViewClientComponentList;
  let fixture: ComponentFixture<ViewClientComponentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClientComponentList ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewClientComponentList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
