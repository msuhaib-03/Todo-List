import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TodosComponent } from './MyComponent/todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // app.component.ts (or main layout component)
ngOnInit() {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    });
  }
}

  title = 'todo-list-app';
darkMode: boolean = false;
isBrowser = false;

constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.darkMode = localStorage.getItem('theme') === 'dark';
    }
  }

 toggleDarkMode() {
    this.darkMode = !this.darkMode;

    if (this.isBrowser) {
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
    }
  }

  private applyTheme() {
    document.body.classList.toggle('dark-mode', this.darkMode);
  }
}

// How this module works is here.. 

