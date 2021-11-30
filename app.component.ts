import { Component } from '@angular/core';
import { MonServiceService } from './mon-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RachidaProject';

  public persone={
    nom:'abdelli',
    prenom:"rachida",
    age:'22'
  }
  public errorr="";
  public monStyle=
{backgroundColor:'green',


}
public monStyle2=
{backgroundColor:'purple',


}
public Etudiantt=[];
constructor(private http: HttpClient){};


  
  


public fruits=[{nom:"banane",img:"assets/photo1.jpg"},{nom:"mama",img:"assets/photo2.jpg"},{nom:"fraise",img:"assets/photo1.jpg"}];
maFonction(){   alert("division cliquee")  }





}
