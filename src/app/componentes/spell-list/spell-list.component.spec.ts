import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListComponent } from './spell-list.component';

describe('SpellListComponent', () => {
  let component: SpellListComponent;
  let fixture: ComponentFixture<SpellListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpellListComponent]
    });
    fixture = TestBed.createComponent(SpellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
