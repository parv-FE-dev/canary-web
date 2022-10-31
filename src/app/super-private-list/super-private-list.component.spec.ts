import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperPrivateListComponent } from './super-private-list.component';

describe('SuperPrivateListComponent', () => {
  let component: SuperPrivateListComponent;
  let fixture: ComponentFixture<SuperPrivateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperPrivateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperPrivateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
