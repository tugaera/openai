import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';

@Component({
  selector: 'app-openai-vision-preview',
  templateUrl: './openai-vision-preview.component.html',
  styleUrl: './openai-vision-preview.component.scss'
})
export class OpenaiVisionPreviewComponent {
  imageUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hong_Kong_Island_Skyline_201108.jpg/1920px-Hong_Kong_Island_Skyline_201108.jpg';
  visionPreview: string = '';
  imageDescription: string = 'What is this image in few words?';
  loading: boolean = false;

  constructor(private openaiService: OpenaiService) { }

  generateVisionPreview() {
    this.loading = true;
    this.openaiService.generateVisionPreview(this.imageUrl, this.imageDescription).subscribe(
      data => {
        // A resposta da API pode variar, ajuste conforme necessário
        this.visionPreview = data.choices[0].message.content;
      },
      error => {
        console.error(error);
      }
    ).add(() => {
      this.loading = false; // Desativar o indicador de carregamento quando a solicitação for concluída
    });
  }
}
