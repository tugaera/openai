import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';

@Component({
  selector: 'app-openai-images-generations',
  templateUrl: './openai-images-generations.component.html',
  styleUrl: './openai-images-generations.component.scss'
})
export class OpenaiImagesGenerationsComponent {
  generatedImage: string = '';
  prompt: string = '';
  loading: boolean = false;

  constructor(private openaiService: OpenaiService) { }

  generateImage() {
    const prompt = this.prompt; // Substitua pelo prompt desejado
    this.loading = true;
    this.openaiService.generateImage(prompt).subscribe(
      data => {
        // A resposta da API pode variar, ajuste conforme necessário
        this.generatedImage = data.generatedImageLink || data.data[0].url;
      },
      error => {
        console.error(error);
      }
    ).add(() => {
      this.loading = false; // Desativar o indicador de carregamento quando a solicitação for concluída
    });;
  }
}
