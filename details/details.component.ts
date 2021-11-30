import { Component, OnInit } from '@angular/core';
import {  Router} from '@angular/router';
import {Cour} from '../cour';
import {ActivatedRoute} from'@angular/router'
import {MonServiceService} from '../mon-service.service';
@Component({
  selector: 'app-details',
  templateUrl:'app-details.component.html',
  styleUrls:['./app-details.component.css']
})
export class DetailsComponent implements OnInit {
public courId;
public t;
public d;
  constructor(private route:ActivatedRoute,private router :Router,private s:MonServiceService) { }

  ngOnInit(): void {
    var id=this.route.snapshot.paramMap.get('id');
     this.courId=id;
     this.s.getCourByID(id).subscribe(res=>{
       this.t=res.title;
       this.d=res.description;
     })
  }

  OnSaveCour(cour:any){
    cour._id=this.courId,
    this.s.UpdateCour(cour).subscribe(res=>{
      cour=res;
      this.router.navigate(['/cours']);
    })

  }

}
