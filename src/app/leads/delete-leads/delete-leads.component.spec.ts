import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLeadsComponent } from './delete-leads.component';

describe('DeleteViewComponent', () => {
  let component: DeleteLeadsComponent;
  let fixture: ComponentFixture<DeleteLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLeadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
