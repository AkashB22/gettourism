import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgDetailsComponent } from './pg-details.component';

describe('PgDetailsComponent', () => {
  let component: PgDetailsComponent;
  let fixture: ComponentFixture<PgDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
