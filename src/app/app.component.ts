import { Component,OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {User} from './signup.interface'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Template Driven Forms';

  
  user :User ={
    name: 'Nishikant',
    gender :false,
    account: {
      email: 'nishikant.hduri@snai.com',
      address: 'deonar'
    }
  }
  countries =[{'id':0,'name':'select','selected':true},{'id':1, 'name':'India','selected':true}, {'id':2, 'name': 'USA','selected':true}, {'id':3, 'name': 'UK','selected':true}]
  ngOnInit(){

  }

  onGenderChange(gender)
  {
debugger
  }
/* 
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  } */

  onSubmit(form)
  {
    debugger
    console.log(form.value)
  }

  onSelectChange(country){
    debugger
    console.log(country)
  }
  

  /* onblurid1(index,val){
debugger
var items = this.user.get('items') as FormArray
items.controls[index].get('result').setValue(val)
  }

  onblurid2(index,val){
    debugger
    var items = this.user.get('items') as FormArray
  items.controls[index].get('result').setValue(val)
      } */

}
