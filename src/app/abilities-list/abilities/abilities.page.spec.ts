import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbilitiesPage } from './abilities.page';

describe('AbilitiesPage', () => {
  let component: AbilitiesPage;
  let fixture: ComponentFixture<AbilitiesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AbilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
