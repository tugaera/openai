import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';

@Component({
  selector: 'app-openai-request',
  templateUrl: './openai-request.component.html',
  styleUrl: './openai-request.component.scss'
})
export class OpenaiRequestComponent {
  response: any;

  constructor(private openaiService: OpenaiService) { }

  getRequest() {
    const prompt = 'Escreva aqui o prompt para a API do OpenAI';
    this.openaiService.getOpenaiResponse(prompt).subscribe(
      data => {
        this.response = data;
      },
      error => {
        console.error(error);
      }
    );
  }
}
