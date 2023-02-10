import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent {

  userData:any={}
getData(data:NgForm){
  console.log(data)
  this.userData=data
}
state:boolean=false

toggle(){
this.state=!this.state
}
}
 