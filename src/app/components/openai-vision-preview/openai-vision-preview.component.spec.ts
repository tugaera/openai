import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaiVisionPreviewComponent } from './openai-vision-preview.component';

describe('OpenaiVisionPreviewComponent', () => {
  let component: OpenaiVisionPreviewComponent;
  let fixture: ComponentFixture<OpenaiVisionPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenaiVisionPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenaiVisionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
