import { Component } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  darkMode = false;
  isBrowser = false;

  constructor() {
    // Restore theme on refresh
    this.darkMode = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    if (!this.isBrowser) return;

    document.body.classList.toggle('dark-mode', this.darkMode);
  }
}
