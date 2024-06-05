import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toggle-iframe',
  standalone: true,
  imports: [],
  templateUrl: './toggle-iframe.component.html',
  styleUrl: './toggle-iframe.component.css'
})
export class ToggleIFrameComponent {
  @ViewChild('iframeContainer') iframeContainer!: ElementRef;
  buttonLabel: string = '?';

  toggleIframe() {
    const iframeContainer = this.iframeContainer.nativeElement;
    if (iframeContainer.style.display === "none" || iframeContainer.style.display === "") {
      iframeContainer.style.display = "block";
      this.buttonLabel = 'X';
    } else {
      iframeContainer.style.display = "none";
      this.buttonLabel = '?';
    }
  }
}
