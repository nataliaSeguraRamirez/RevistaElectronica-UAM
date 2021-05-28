import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloEditorComponent } from './articulo-editor.component';

describe('ArticuloEditorComponent', () => {
  let component: ArticuloEditorComponent;
  let fixture: ComponentFixture<ArticuloEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
