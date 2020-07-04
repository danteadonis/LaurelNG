import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMaleComponent } from './shop-male.component';

describe('ShopMaleComponent', () => {
  let component: ShopMaleComponent;
  let fixture: ComponentFixture<ShopMaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
