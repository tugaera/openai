import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaiImagesGenerationsComponent } from './openai-images-generations.component';

describe('OpenaiImagesGenerationsComponent', () => {
  let component: OpenaiImagesGenerationsComponent;
  let fixture: ComponentFixture<OpenaiImagesGenerationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenaiImagesGenerationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenaiImagesGenerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
