import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cour} from '../cour';
import {MonServiceService} from '../mon-service.service';
@Component({
  selector: 'app-page1',
  templateUrl:'app-page1.component.html',
  styleUrls:['./app-page1.component.css']
})
export class Page1Component implements OnInit {

cours : Array<Cour>;
constructor (private router:Router ,private l:MonServiceService){}

  ngOnInit():void{
    this.l.getCours().subscribe(resCours=>this.cours=resCours);
  }
  OnUpdateFunction (u){
   console.log(u._id);
    this.router.navigate(['/cours',u._id])    };

    
  
    OnDeleteFunction(u){
      this.l.DeleteCour(u).subscribe(date=>this.cours.splice(u._id,1));
               
    }
}
