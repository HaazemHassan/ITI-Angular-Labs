import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCall } from './api-call';

describe('ApiCall', () => {
  let component: ApiCall;
  let fixture: ComponentFixture<ApiCall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
