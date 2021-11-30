import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MonServiceService} from '../mon-service.service';
import{ActivatedRoute}from '@angular/router';
import { Cour } from '../cour';

  @Component({
    selector: 'app-page2',
    templateUrl:'app-page2.component.html',
    styleUrls:['./app-page2.component.css']
  })
export class Page2Component implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router, private s:MonServiceService) { }
  cours=[];
  public courId;
  public t;
  public d;


  ngOnInit() {
    var id=this.route.snapshot.paramMap.get('id');
    this.courId=id;
    this.s.getCourByID(id)
    .subscribe(res => {this.t=res.title;this.d=res.description }
      );
  }

 OnAddCour(cour:Cour){
  this.s.addCour(cour)
               .subscribe(resnextCour=>this.cours.push(resnextCour));
               this.router.navigate(['/cours']);
               console.log(cour);
 }







}
