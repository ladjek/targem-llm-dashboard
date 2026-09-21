import { Component, OnInit } from '@angular/core';
import { LlmModel } from '../../models/llm-model';
import { LlmDataService } from '../../services/llm-data.service';

@Component({
  selector: 'app-llm-dashboard',
  templateUrl: './llm-dashboard.component.html',
  styleUrls: ['./llm-dashboard.component.scss']
})
export class LlmDashboardComponent {
  userToken = '';
  label = '';
  Mainlabel = '';
  models: LlmModel[] = [];
  tools: string[] = [];
  selectedTool = '';

  constructor(private llmDataService: LlmDataService) {
    this.userToken = this.llmDataService.getUserToken();
    this.models = this.llmDataService.getModels();
    this.label = this.llmDataService.getlabel();
    this.Mainlabel = this.llmDataService.getMainlabel();
    this.tools = this.llmDataService.getTools();
    this.selectedTool = this.tools[0];
  }
 
  selectTool(tool: string) {
  this.selectedTool = tool;
}
}


