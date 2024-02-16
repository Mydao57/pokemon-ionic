import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeNewPage } from './type-new.page';

describe('TypeNewPage', () => {
  let component: TypeNewPage;
  let fixture: ComponentFixture<TypeNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TypeNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
