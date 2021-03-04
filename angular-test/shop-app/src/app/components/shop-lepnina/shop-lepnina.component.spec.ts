import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLepninaComponent } from './shop-lepnina.component';

describe('ShopLepninaComponent', () => {
  let component: ShopLepninaComponent;
  let fixture: ComponentFixture<ShopLepninaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopLepninaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopLepninaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
