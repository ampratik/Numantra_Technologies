import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog'
  data="Angular Day 2"
  // getName(name:string,secondName:string){
  //   alert(name)
  //   alert(secondName
  //     )
  //}

   ResultValue:string=""
  getData(val:string){
    console.warn(val)
    this.ResultValue=val
  }
  
  count=0
counter(val:string){
val==='add' ? this.count++ : this.count--
}

value="yeah its possible"
disable=false

show="No"
color="blue"
colour="green"

users=["Pratik","shubham","sam","andrew","tony","steve","beck"]

userDetails=[
  { name:"pratik" , age:21,  email:"pratik@test.com" ,social_accounts:["insta","facebook","twitter"] },
  { name:"shubham" , age:24,  email:"shubham@test.com" ,social_accounts:["Linkdin","facebook","twitter"] },
  { name:"dan" , age:22,  email:"dan@test.com" ,social_accounts:["insta","youtube","twitter"]  },
  { name:"rahul" , age:27,  email:"rahul@test.com" ,social_accounts:["insta","facebook","snapchat"] },
  { name:"abrar" , age:22,  email:"abrar@test.com" ,social_accounts:["tinder","facebook","twitter"] }

]
 color1="red"
 bgcolor="blue"

 changeColor(){
  this.color1="blue"
  this.bgcolor="red"
 }

}


