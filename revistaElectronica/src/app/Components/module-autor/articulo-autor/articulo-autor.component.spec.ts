import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloAutorComponent } from './articulo-autor.component';

describe('ArticuloAutorComponent', () => {
  let component: ArticuloAutorComponent;
  let fixture: ComponentFixture<ArticuloAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
