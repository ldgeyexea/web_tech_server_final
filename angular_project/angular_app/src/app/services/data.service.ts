import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3100';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url + '/api/posts');
  }

  getById(id: string) {
    return this.http.get(this.url + '/api/post/' + id);
  }
  addPost(title:string,text:string,img:string){
    const body={title:title,text:text,image:img};
    console.log(body)
      return this.http.post(this.url+'/api/post',body)
  }


}
