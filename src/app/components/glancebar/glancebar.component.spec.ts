import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlancebarComponent } from './glancebar.component';

describe('GlancebarComponent', () => {
  let component: GlancebarComponent;
  let fixture: ComponentFixture<GlancebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlancebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlancebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
