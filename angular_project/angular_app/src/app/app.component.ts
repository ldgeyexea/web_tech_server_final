import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BlogComponent} from "./components/blog/blog.component";
import {SearchBarComponent} from "./shared/search-bar/search-bar.component";
import {NavbarComponent} from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,BlogComponent,SearchBarComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  public counter: number = 0;

  add() {
    this.counter++;
  }

  remove() {
    this.counter--;
  }
}
