import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

 forgetForm!:FormGroup;
constructor(private  fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.forgetForm=this.fb.group({
      userName:['',Validators.required],
      userRole:['',Validators.required,],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPass:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  onSubmit(){
    if(this.forgetForm.valid){
     console.log(this.forgetForm.value);
    }
  }
  navigateToLogin(){
     this.router.navigate(['/pre-auth/landingpage/login']);
  }

}
