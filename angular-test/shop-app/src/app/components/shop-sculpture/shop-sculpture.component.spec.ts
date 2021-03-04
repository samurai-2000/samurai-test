import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSculptureComponent } from './shop-sculpture.component';

describe('ShopSculptureComponent', () => {
  let component: ShopSculptureComponent;
  let fixture: ComponentFixture<ShopSculptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSculptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSculptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
