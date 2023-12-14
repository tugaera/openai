import { Component, OnInit } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';

@Component({
  selector: 'app-openai-chat',
  templateUrl: './openai-chat.component.html',
  styleUrl: './openai-chat.component.scss'
})
export class OpenaiChatComponent implements OnInit {
  chatHistory: { role: string | 'user' |'assistant'; content: string }[] = [];
  userInput: string = '';
  loading: boolean = false;

  constructor(private openaiService: OpenaiService) { }

  ngOnInit() {
    this.loadChatHistory();
  }

  sendMessage() {
    const userMessage = { role: 'user', content: this.userInput };
    this.chatHistory.push(userMessage);
    this.loading = true;

    // Chame o OpenAI aqui e adicione a resposta ao histórico
    this.openaiService.sendMessageToAssistant(this.chatHistory).subscribe(
      response => {
        const assistantMessage = { role: 'assistant', content: response.choices[0].message.content };
        this.chatHistory.push(assistantMessage);
        this.saveChatHistory();
      },
      error => {
        console.error(error);
      }
    ).add(() => {
      this.loading = false; // Desativar o indicador de carregamento quando a solicitação for concluída
    });

    this.userInput = ''; // Limpar a entrada do usuário após o envio da mensagem
  }

  downloadHistory() {
    const dataStr = JSON.stringify(this.chatHistory, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat_history.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  uploadHistory(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const content = JSON.parse(e.target.result);
        this.chatHistory = content;
        this.saveChatHistory();
      };
      reader.readAsText(file);
    }
  }

  clearHistory() {
    this.chatHistory = [];
    this.saveChatHistory();
  }

  private saveChatHistory() {
    localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory));
  }

  private loadChatHistory() {
    const storedHistory = localStorage.getItem('chatHistory');
    this.chatHistory = storedHistory ? JSON.parse(storedHistory) : [];
  }
}