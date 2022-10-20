import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingSuggestionsComponent } from './trending-suggestions.component';

describe('TrendingSuggestionsComponent', () => {
  let component: TrendingSuggestionsComponent;
  let fixture: ComponentFixture<TrendingSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingSuggestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
