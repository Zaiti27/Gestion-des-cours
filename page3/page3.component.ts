import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  template: `
 <div id="div3"> <br>
  <br>
    <h4>Email<h4> 
    
   <p> r.abdelli@esi-sba.dz</p>
   <br>
   
   <h4>telephone<h4> 
   <p>07 77 77 77 77</p>
   <br>
   <h4>date de naissance<h4> 
    
   <p>26 / 08 /1998</p>
   <br>
   <h4>membre depuis<h4> 
    
   <p>10 / 09 /2016</p>
  `,
  styles: [

'#div3 {  margin-left: 100px; }'


  ]
})
export class Page3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
