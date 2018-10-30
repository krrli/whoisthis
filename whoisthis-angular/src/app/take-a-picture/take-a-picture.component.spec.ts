/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAPictureComponent } from './take-a-picture.component';

describe('TakeAPictureComponent', () => {
  let component: TakeAPictureComponent;
  let fixture: ComponentFixture<TakeAPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TakeAPictureComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeAPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
