import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalShareComponent } from './local-share.component';

describe('LocalShareComponent', () => {
  let component: LocalShareComponent;
  let fixture: ComponentFixture<LocalShareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LocalShareComponent]
    });
    fixture = TestBed.createComponent(LocalShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
