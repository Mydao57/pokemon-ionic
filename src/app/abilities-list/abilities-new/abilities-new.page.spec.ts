import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbilitiesNewPage } from './abilities-new.page';

describe('AbilitiesNewPage', () => {
  let component: AbilitiesNewPage;
  let fixture: ComponentFixture<AbilitiesNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AbilitiesNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
