import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apiKey = environment.openaiApiKey; // Substitua pela sua chave de API da OpenAI

  constructor(private http: HttpClient) { }

  getOpenaiResponse(prompt: string): Observable<any> {
    const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';  // Substitua pela URL correta da API do OpenAI
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`  // Substitua pela sua chave de API do OpenAI
    });

    const data = {
      prompt: prompt,
      max_tokens: 150
      // Adicione outros parâmetros conforme necessário
    };

    return this.http.post<any>(apiUrl, data, { headers });
  }

  generateImage(prompt: string): Observable<any> {
    const apiUrl = 'https://api.openai.com/v1/images/generations';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}` // Substitua pela sua chave de API do OpenAI
    });

    const data = {
      model: "dall-e-3",
      prompt: prompt,
      // Adicione outros parâmetros conforme necessário
      // size: '1792x1024'
      // quality: 'hd'
      // n: 2
    };

    return this.http.post<any>(apiUrl, data, { headers });
  }

  generateVisionPreview(imageUrl: string, imageDescription: string): Observable<any> {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}` // Substitua pela sua chave de API do OpenAI
    });

    const data = {
      // Adicione outros parâmetros conforme necessário
      model: "gpt-4-vision-preview",
      messages: [
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": imageDescription
            },
            {
              "type": "image_url",
              "image_url": {
                "url": imageUrl
              }
            }
          ]
        }
      ]
    };

    return this.http.post<any>(apiUrl, data, { headers });
  }

  sendMessageToAssistant(messages: { role: string | 'user' |'assistant'; content: string }[]): Observable<any> {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}` // Substitua pela sua chave de API do OpenAI
    });

    const data = {
      model: "gpt-4-1106-preview",
      messages: [
        { role: 'system', content: 'Você é um assistente.' },
        ...messages
      ]
    };

    return this.http.post<any>(apiUrl, data, { headers });
  }

  sendImageEditRequest(imageFiles: Map<string, File>, prompt: string): Observable<any> {
    const apiUrl = 'https://api.openai.com/v1/images/edits';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });

    const formData = new FormData();

    // Adiciona os arquivos de imagem ao FormData
    imageFiles.forEach((file, imageName) => {
      formData.append(imageName, file);
    });

    // Adiciona o prompt ao FormData
    formData.append('prompt', prompt);

    formData.append('model', 'dall-e-2');

    const json = {
      "input_image": "https://static.preparaenem.com/2022/08/paisagem-natural-suica.jpg",
      "edits": [
        {
          "instruction": "Put a storm in the sky",
          // "mask": "<URL_ou_Dados_da_Máscara_Opcional>"
        }
      ]
    }

    return this.http.post(apiUrl, formData, { headers });
  }
}