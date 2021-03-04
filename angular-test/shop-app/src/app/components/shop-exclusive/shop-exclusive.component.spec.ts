import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopExclusiveComponent } from './shop-exclusive.component';

describe('ShopExclusiveComponent', () => {
  let component: ShopExclusiveComponent;
  let fixture: ComponentFixture<ShopExclusiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopExclusiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopExclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
