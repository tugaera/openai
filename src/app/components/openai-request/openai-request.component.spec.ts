import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaiRequestComponent } from './openai-request.component';

describe('OpenaiRequestComponent', () => {
  let component: OpenaiRequestComponent;
  let fixture: ComponentFixture<OpenaiRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenaiRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenaiRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
