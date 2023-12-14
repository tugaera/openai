import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaiImagesEditsComponent } from './openai-images-edits.component';

describe('OpenaiImagesEditsComponent', () => {
  let component: OpenaiImagesEditsComponent;
  let fixture: ComponentFixture<OpenaiImagesEditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenaiImagesEditsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenaiImagesEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
