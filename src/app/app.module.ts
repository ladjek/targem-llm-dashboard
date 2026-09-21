import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LlmDashboardComponent } from './pages/llm-dashboard/llm-dashboard.component';
import { TokenCardComponent } from './components/token-card/token-card.component';
import { ModelCardComponent } from './components/model-card/model-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LlmDashboardComponent,
    TokenCardComponent,
    ModelCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
