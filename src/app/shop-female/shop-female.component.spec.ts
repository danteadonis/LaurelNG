import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFemaleComponent } from './shop-female.component';

describe('ShopFemaleComponent', () => {
  let component: ShopFemaleComponent;
  let fixture: ComponentFixture<ShopFemaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFemaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
