import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenaiRequestComponent } from './components/openai-request/openai-request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { OpenaiImagesGenerationsComponent } from './components/openai-images-generations/openai-images-generations.component';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OpenaiVisionPreviewComponent } from './components/openai-vision-preview/openai-vision-preview.component';
import { OpenaiChatComponent } from './components/openai-chat/openai-chat.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OpenaiImagesEditsComponent } from './components/openai-images-edits/openai-images-edits.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenaiRequestComponent,
    OpenaiImagesGenerationsComponent,
    OpenaiVisionPreviewComponent,
    OpenaiChatComponent,
    OpenaiImagesEditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
