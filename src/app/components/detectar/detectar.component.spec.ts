import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectarComponent } from './detectar.component';

describe('DetectarComponent', () => {
  let component: DetectarComponent;
  let fixture: ComponentFixture<DetectarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
