import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbilitiesListPage } from './abilities-list.page';

describe('AbilitiesListPage', () => {
  let component: AbilitiesListPage;
  let fixture: ComponentFixture<AbilitiesListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AbilitiesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
