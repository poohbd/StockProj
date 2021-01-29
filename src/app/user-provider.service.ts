import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProvider {

  dbURL = "http://1becd1beed38.ngrok.io"

  constructor(public http: HttpClient) { }


  pushData(id,name,email){
    let request =this.http.post(this.dbURL+"/insert",{"id":id,"name":name,"e-mail":email})
    request.subscribe((data) => {console.log(data);})
  }
}
