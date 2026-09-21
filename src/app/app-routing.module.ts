import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlmDashboardComponent } from './pages/llm-dashboard/llm-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LlmDashboardComponent
  },
  {
    path: 'llm',
    component: LlmDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}