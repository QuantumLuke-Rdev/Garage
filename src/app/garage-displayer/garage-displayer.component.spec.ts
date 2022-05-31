import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageDisplayerComponent } from './garage-displayer.component';

describe('GarageDisplayerComponent', () => {
  let component: GarageDisplayerComponent;
  let fixture: ComponentFixture<GarageDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
