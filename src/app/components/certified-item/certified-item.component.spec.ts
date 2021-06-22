import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedItemComponent } from './certified-item.component';

describe('CertifiedItemComponent', () => {
  let component: CertifiedItemComponent;
  let fixture: ComponentFixture<CertifiedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifiedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifiedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
