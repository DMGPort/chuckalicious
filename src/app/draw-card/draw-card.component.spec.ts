/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { DrawCardService } from '../draw-card.service';

import { DrawCardComponent } from './draw-card.component';

describe('DrawCardComponent', () => {
  let component: DrawCardComponent;
  let fixture: ComponentFixture<DrawCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawCardComponent ],
      providers: [ DrawCardService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
