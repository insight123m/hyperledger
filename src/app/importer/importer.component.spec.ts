import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporterComponent } from './importer.component';

describe('ImporterComponent', () => {
  let component: ImporterComponent;
  let fixture: ComponentFixture<ImporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
