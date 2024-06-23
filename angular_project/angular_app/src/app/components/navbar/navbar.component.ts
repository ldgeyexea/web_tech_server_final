import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Console} from "inspector";
import {SearchBarComponent} from "../../shared/search-bar/search-bar.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, SearchBarComponent],
  providers: [AuthService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit(): void {
  }

  signOut() {
    // this.authService.printAll();
    // this.authService.force();
    this.authService.logout().subscribe((result: any) => {
      this.router.navigate(['/']);
      console.log("test2")
      return result;
    });
  }

}
