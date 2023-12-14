import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';

@Component({
  selector: 'app-openai-images-edits',
  templateUrl: './openai-images-edits.component.html',
  styleUrl: './openai-images-edits.component.scss'
})
export class OpenaiImagesEditsComponent {
  private imageFiles: Map<string, File> = new Map();
  prompt: string = '';

  constructor(private openaiService: OpenaiService) {}

  sendImageEditRequest() {
    // Simulação de dados para o exemplo, você deve fornecer seus próprios dados
    this.openaiService.sendImageEditRequest(this.imageFiles, this.prompt).subscribe(
      (response) => {
        console.log('Resposta da solicitação de edição de imagem:', response);
        // Lide com a resposta conforme necessário
      },
      (error) => {
        console.error('Erro na solicitação de edição de imagem:', error);
        // Lide com o erro conforme necessário
      }
    );
  }

  handleImageChange(event: any, imageName: string) {
    const file: File = event.target.files[0];
    this.imageFiles.set(imageName, file);
  }
}
