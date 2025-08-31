import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-module',
  templateUrl: './dialog-module.component.html',
  styleUrls: ['./dialog-module.component.scss']
})
export class DialogModuleComponent implements OnInit {

  signupForm!:FormGroup;
 constructor(@Inject(MAT_DIALOG_DATA) private data: any,private  fb:FormBuilder) { }


  ngOnInit() {
      this.signupForm=this.fb.group({
        userName:['',Validators.required],
        userRole:['',Validators.required,],
        password:['',[Validators.required,Validators.minLength(6)]],
        confirmPass:['',[Validators.required,Validators.minLength(6)]]
      })
    }
    onSubmit(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value);
    }
  }
}
