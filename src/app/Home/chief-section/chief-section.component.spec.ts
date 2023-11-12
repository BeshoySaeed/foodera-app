import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefSectionComponent } from './chief-section.component';

describe('ChiefSectionComponent', () => {
  let component: ChiefSectionComponent;
  let fixture: ComponentFixture<ChiefSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiefSectionComponent]
    });
    fixture = TestBed.createComponent(ChiefSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
