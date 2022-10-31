import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveListsComponent } from './archive-lists.component';

describe('ArchiveListsComponent', () => {
  let component: ArchiveListsComponent;
  let fixture: ComponentFixture<ArchiveListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
