import { Component } from '@angular/core';
import { faMoon as whiteMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as darkMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  whiteMoon: any;
  darkMoon: any;
  activeLinkId: any;

  mood: boolean = false;

  constructor() {
    this.whiteMoon = whiteMoon;
    this.darkMoon = darkMoon;
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  moodClick() {
    this.mood = !this.mood;

    if (this.mood) {
      if (!document.body.classList.contains('dark')) {
        document.body.classList.add('dark');
      }
    } else {
      if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
      }
    }
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  onScroll() {
    const componentElements = document.querySelectorAll('.c-class');
    const windowHeight = window.innerHeight;

    let activeLinkId = null;

    for (let i = 0; i < componentElements.length; i++) {
      const element = componentElements[i] as HTMLElement;
      const rect = element.getBoundingClientRect();

      const scrollPositionThreshold = windowHeight * 0.5;

      if (
        rect.top <= scrollPositionThreshold &&
        rect.bottom >= scrollPositionThreshold
      ) {
        const componentId = element.getAttribute('id');
        activeLinkId = componentId;
      }
    }

    this.activeLinkId = activeLinkId;
  }

  ngOnDestory() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }
}
