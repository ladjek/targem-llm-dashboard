import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-token-card',
  templateUrl: './token-card.component.html',
  styleUrls: ['./token-card.component.scss']
})
export class TokenCardComponent {
  @Input() token = '';
  @Input() title = '';
  isTokenVisible = true;
  copyUserToken() {
  navigator.clipboard.writeText(this.token);
  };
toggleToken() {
  this.isTokenVisible = !this.isTokenVisible;
}
}
