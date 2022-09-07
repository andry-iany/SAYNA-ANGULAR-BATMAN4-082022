import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideLinksComponent } from './aside-links.component';

describe('AsideLinksComponent', () => {
  let component: AsideLinksComponent;
  let fixture: ComponentFixture<AsideLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
