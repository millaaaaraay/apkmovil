import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemediosDeletePage } from './remedios-delete.page';

describe('RemediosDeletePage', () => {
  let component: RemediosDeletePage;
  let fixture: ComponentFixture<RemediosDeletePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RemediosDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
