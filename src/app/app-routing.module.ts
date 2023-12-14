import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OpenaiChatComponent } from './components/openai-chat/openai-chat.component';
import { OpenaiImagesEditsComponent } from './components/openai-images-edits/openai-images-edits.component';
import { OpenaiImagesGenerationsComponent } from './components/openai-images-generations/openai-images-generations.component';
import { OpenaiRequestComponent } from './components/openai-request/openai-request.component';
import { OpenaiVisionPreviewComponent } from './components/openai-vision-preview/openai-vision-preview.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'openai-request', component: OpenaiRequestComponent },
  { path: 'openai-images-generations', component: OpenaiImagesGenerationsComponent },
  { path: 'openai-vision-preview', component: OpenaiVisionPreviewComponent },
  { path: 'openai-chat', component: OpenaiChatComponent },
  { path: 'openai-images-edits', component: OpenaiImagesEditsComponent },
   // Adicione outras rotas conforme necessário
   { path: '**', redirectTo: '/openai-chat' }, // Rota padrão para redirecionar para o chat
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
