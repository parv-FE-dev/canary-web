import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonliseFeedComponent } from './personlise-feed.component';

describe('PersonliseFeedComponent', () => {
  let component: PersonliseFeedComponent;
  let fixture: ComponentFixture<PersonliseFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonliseFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonliseFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
