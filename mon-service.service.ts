import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable , of ,throwError} from 'rxjs';
import {Cour} from './cour';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  constructor(private http:HttpClient) { }
  /**
   * name
   */
  public direbonjour() {
    alert("hi rachida am here ");
  }
getCours(){
  return this.http.get<Cour []>('http://localhost:4000/cours').pipe(
    map(response=>response)
  );
}

  getCourByID(id:string){
    return this.http.get<Cour>("http://localhost:4000/cours/"+id).pipe(
      map(response=>response)
    );
  }


  addCour(cour:Cour){
    console.log(JSON.stringify(cour));
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let options = {
      headers: headers
    }
    return this.http.post<Cour[]>("http://localhost:4000/cour",JSON.stringify(cour),options)
    .pipe(
      map(response=>response)
    );
  }
  

  UpdateCour(cour:Cour){
    let headers= new HttpHeaders({
      'Content-Type' :'application/json'
    });
    let options={
      headers :headers
    }
    return this.http.put("http://localhost:4000/cour/"+cour._id,JSON.stringify(cour),options)
    .pipe(
      map(response=>response)
    );
  }

  DeleteCour(cour:Cour){
    console.log(JSON.stringify(cour));
    let headers= new HttpHeaders ({
        'Content-Type': 'application/json',
    });
    let options = {
        headers:headers
    }
    return this.http.delete<Cour[]>("http://localhost:4000/cour/"+cour._id,options)
    .pipe(
        map(response=>response)
    ); 
}


}
