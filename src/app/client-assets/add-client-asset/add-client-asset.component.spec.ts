import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientAssetComponent } from './add-client-asset.component';

describe('AddClientAssetComponent', () => {
  let component: AddClientAssetComponent;
  let fixture: ComponentFixture<AddClientAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddClientAssetComponent]
    });
    fixture = TestBed.createComponent(AddClientAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
