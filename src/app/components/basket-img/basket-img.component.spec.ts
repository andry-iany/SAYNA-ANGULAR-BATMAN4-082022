import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketImgComponent } from './basket-img.component';

describe('BasketImgComponent', () => {
  let component: BasketImgComponent;
  let fixture: ComponentFixture<BasketImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
