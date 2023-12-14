import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaiChatComponent } from './openai-chat.component';

describe('OpenaiChatComponent', () => {
  let component: OpenaiChatComponent;
  let fixture: ComponentFixture<OpenaiChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenaiChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenaiChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
