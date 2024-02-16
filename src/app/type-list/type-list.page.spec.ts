import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeListPage } from './type-list.page';

describe('TypeListPage', () => {
  let component: TypeListPage;
  let fixture: ComponentFixture<TypeListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TypeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
