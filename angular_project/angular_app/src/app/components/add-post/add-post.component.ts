import {Component} from '@angular/core';
import {DataService} from "../../services/data.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule],
  providers: [DataService],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

  public post = {
    title: '',
    text: '',
    img: '',
  }

  constructor(public dataService: DataService, private router: Router) {
  }

  sendPost(title: string, text: string, img: string) {
    console.log("eo");
    this.dataService.addPost(title, text, img).subscribe(
      (res: any) => {
        console.log(res)
        this.router.navigate(['/blog'])
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  resetForm() {
    this.post = {
      title: '',
      text: '',
      img: '',
    };
  }

}
