import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprodComponent } from './newprod.component';

describe('NewprodComponent', () => {
  let component: NewprodComponent;
  let fixture: ComponentFixture<NewprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
