import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompComponent } from './child-comp.component';

describe('ChildCompComponent', () => {
  let component: ChildCompComponent;
  let fixture: ComponentFixture<ChildCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCompComponent);
    component = fixture.componentInstance;
    component.parentCpt = {value:0};
    fixture.detectChanges();
  });



  it('should create parentCpt', () => {
    // fixture.detectChanges();
    console.log(component)
    expect(component.parentCpt).toEqual({value:0});
  });

});
