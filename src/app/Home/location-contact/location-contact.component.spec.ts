import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationContactComponent } from './location-contact.component';

describe('LocationContactComponent', () => {
  let component: LocationContactComponent;
  let fixture: ComponentFixture<LocationContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationContactComponent]
    });
    fixture = TestBed.createComponent(LocationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
