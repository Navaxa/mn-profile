import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedsComponent } from './certifieds.component';

describe('CertifiedsComponent', () => {
  let component: CertifiedsComponent;
  let fixture: ComponentFixture<CertifiedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifiedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
