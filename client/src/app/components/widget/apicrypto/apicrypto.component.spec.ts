import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicryptoComponent } from './apicrypto.component';

describe('ApicryptoComponent', () => {
  let component: ApicryptoComponent;
  let fixture: ComponentFixture<ApicryptoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApicryptoComponent]
    });
    fixture = TestBed.createComponent(ApicryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
