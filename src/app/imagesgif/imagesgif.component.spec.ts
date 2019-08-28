import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesgifComponent } from './imagesgif.component';

describe('ImagesgifComponent', () => {
  let component: ImagesgifComponent;
  let fixture: ComponentFixture<ImagesgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
