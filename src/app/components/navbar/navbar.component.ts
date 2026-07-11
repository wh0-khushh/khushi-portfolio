import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mobileMenuOpen = false;
  darkMode = false;
  scrollProgress = 0;

  ngOnInit(): void {

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {

      this.darkMode = true;

      document.documentElement.setAttribute('data-theme', 'dark');

    }

    this.updateProgress();

  }

  @HostListener('window:scroll')

  onScroll(): void {

    this.updateProgress();

  }

  updateProgress(): void {

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    this.scrollProgress =
      (window.scrollY / height) * 100;

  }

  toggleMenu(): void {

    this.mobileMenuOpen = !this.mobileMenuOpen;

  }

  closeMenu(): void {

    this.mobileMenuOpen = false;

  }

  toggleTheme(): void {

    this.darkMode = !this.darkMode;

    if (this.darkMode) {

      document.documentElement.setAttribute('data-theme', 'dark');

      localStorage.setItem('theme', 'dark');

    } else {

      document.documentElement.removeAttribute('data-theme');

      localStorage.setItem('theme', 'light');

    }

  }

}