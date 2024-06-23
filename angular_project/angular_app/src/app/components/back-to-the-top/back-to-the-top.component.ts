import { Component,HostListener, } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-back-to-the-top',
  standalone: true,
  imports: [
    NgIf,
    CommonModule
  ],
  templateUrl: './back-to-the-top.component.html',
  styleUrl: './back-to-the-top.component.css'
})
export class BackToTheTopComponent {
  isVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 1000;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
