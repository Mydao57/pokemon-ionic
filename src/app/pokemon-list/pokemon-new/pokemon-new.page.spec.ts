import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonNewPage } from './pokemon-new.page';

describe('PokemonNewPage', () => {
  let component: PokemonNewPage;
  let fixture: ComponentFixture<PokemonNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PokemonNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
