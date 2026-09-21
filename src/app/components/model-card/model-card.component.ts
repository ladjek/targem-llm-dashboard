import { Component, Input } from '@angular/core';
import { LlmModel } from '../../models/llm-model';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss']
})
export class ModelCardComponent {
  @Input() model!: LlmModel;
}