import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithHeaderComponent } from './with-header.component';

describe('WithHeaderComponent', () => {
  let component: WithHeaderComponent;
  let fixture: ComponentFixture<WithHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
