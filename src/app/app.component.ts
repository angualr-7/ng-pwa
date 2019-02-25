import { Component, OnInit, Input } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-pwa';

  @Input() public pwaPromptEvent = null;

  constructor() {

  }

  ngOnInit(): void {
    window.addEventListener('beforeinstallprompt', event => {
      this.pwaPromptEvent = event;
      console.log('this.pwaPromptEvent', this.pwaPromptEvent);
    });
  }
  public installPwa(): void {
    console.log('installPwa...');
    this.pwaPromptEvent.prompt();
    this.pwaPromptEvent = null;
  }
}
