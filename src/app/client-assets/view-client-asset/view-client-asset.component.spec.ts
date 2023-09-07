import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientAssetComponent } from './view-client-asset.component';

describe('ViewClientAssetComponent', () => {
  let component: ViewClientAssetComponent;
  let fixture: ComponentFixture<ViewClientAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewClientAssetComponent]
    });
    fixture = TestBed.createComponent(ViewClientAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
