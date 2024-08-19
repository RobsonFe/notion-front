import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css',
})
export class ToggleComponent {
  isDarkMode = false;

  constructor() {}

  ngOnInit(): void {
    // Verifica a preferência do sistema operacional ou navegador
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Verifica se o usuário já definiu uma preferência e salva no localStorage
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
      this.isDarkMode = currentTheme === 'dark';
    } else {
      this.isDarkMode = prefersDarkScheme.matches;
    }

    // Aplica a classe "dark" se for necessário
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
