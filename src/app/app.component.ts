import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <a routerLink="/" class="logo">
          <span class="logo-icon">⚡</span>
          <span class="logo-text">ts-utils-lite</span>
        </a>
        <div class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <span class="nav-icon">🏠</span> Home
          </a>
          <a routerLink="/showcase" routerLinkActive="active">
            <span class="nav-icon">📖</span> How to Use
          </a>
          <a routerLink="/roadmap" routerLinkActive="active">
            <span class="nav-icon">🗺️</span> Roadmap
          </a>
        </div>
        <div class="nav-right">
          <button class="theme-toggle" (click)="toggleTheme()">
            {{ isDark ? '☀️' : '🌙' }}
          </button>
          <a href="https://github.com/gbmrocks/ts-utils-lite" target="_blank" class="github-btn">
            <span>⭐</span> GitHub
          </a>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:gaurangmody25@gmail.com">gaurangmody25&#64;gmail.com</a></p>
          </div>
          <div class="footer-section">
            <h4>Project</h4>
            <p><a href="https://github.com/gbmrocks/ts-utils-lite" target="_blank">GitHub Repository</a></p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Gaurang Mody. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background: var(--bg-nav);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border-color);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.875rem 2rem;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-size: 1.25rem;
      font-weight: 800;
    }

    .logo-icon { font-size: 1.5rem; }

    .logo-text {
      background: linear-gradient(135deg, #3b82f6, #6366f1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nav-links {
      display: flex;
      gap: 0.25rem;
    }

    .nav-links a {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      color: var(--text-muted);
      text-decoration: none;
      padding: 0.625rem 1.125rem;
      border-radius: 12px;
      transition: all 0.25s ease;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .nav-icon { font-size: 1rem; }

    .nav-links a:hover {
      color: var(--text);
      background: var(--bg-hover);
    }

    .nav-links a.active {
      color: #fff;
      background: linear-gradient(135deg, #3b82f6, #6366f1);
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
    }

    .nav-right {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .theme-toggle {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 0.5rem 0.75rem;
      font-size: 1.25rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    .theme-toggle:hover {
      transform: scale(1.05);
    }

    .github-btn {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      font-weight: 500;
      font-size: 0.875rem;
      transition: all 0.25s ease;
    }

    .github-btn:hover {
      background: var(--bg-hover);
      color: var(--text);
    }

    :host {
      display: block;
      padding-top: 64px;
      background: var(--bg);
      min-height: 100vh;
      transition: background 0.3s, color 0.3s;
    }

    .footer {
      background: var(--bg-card);
      border-top: 1px solid var(--border-color);
      padding: 3rem 2rem 2rem;
      margin-top: 4rem;
      margin-bottom: 0;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h4 {
      color: var(--text);
      margin-bottom: 0.75rem;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 600;
    }

    .footer-section p {
      color: var(--text-muted);
      font-size: 0.875rem;
      line-height: 1.6;
      margin: 0;
    }

    .footer-section a {
      color: #3b82f6;
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .footer-section a:hover {
      color: #6366f1;
      text-decoration: underline;
    }

    .footer-bottom {
      border-top: 1px solid var(--border-color);
      padding-top: 1.5rem;
      text-align: center;
    }

    .footer-bottom p {
      color: var(--text-muted);
      font-size: 0.8rem;
      margin: 0;
    }
  `]
})
export class AppComponent {
  title = 'ts-utils-lite';
  isDark = true;
  currentYear = new Date().getFullYear();

  toggleTheme(): void {
    this.isDark = !this.isDark;
    document.body.classList.toggle('light-theme', !this.isDark);
  }
}
