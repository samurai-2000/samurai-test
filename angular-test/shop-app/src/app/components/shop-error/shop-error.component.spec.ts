import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopErrorComponent } from './shop-error.component';

describe('ShopErrorComponent', () => {
  let component: ShopErrorComponent;
  let fixture: ComponentFixture<ShopErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
