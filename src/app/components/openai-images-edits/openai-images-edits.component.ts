import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';

@Component({
  selector: 'app-openai-images-edits',
  templateUrl: './openai-images-edits.component.html',
  styleUrl: './openai-images-edits.component.scss'
})
export class OpenaiImagesEditsComponent {
  constructor(private openaiService: OpenaiService) {}

  sendImageEditRequest() {
    // Simulação de dados para o exemplo, você deve fornecer seus próprios dados
    const formData = new FormData();
    formData.append('image', 'caminho/para/sua/imagem.jpg');
    formData.append('edits', JSON.stringify({ your_edits: 'aqui' }));

    this.openaiService.sendImageEditRequest(formData).subscribe(
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
}
