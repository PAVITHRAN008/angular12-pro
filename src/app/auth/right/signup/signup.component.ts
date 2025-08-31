import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup;
  constructor(private  fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.signupForm=this.fb.group({
      userName:['',Validators.required],
      userRole:['',Validators.required,],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPass:['',[Validators.required,Validators.minLength(6)]]
    },{
      validator: this.passwordMatchValidator
    })
  }
  passwordMatchValidator(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value;
  const confirmPass = formGroup.get('confirmPass')?.value;
  return password === confirmPass ? null : { mismatch: true };
}
  onSubmit(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value);
    }
  }
  navigateToLogin(){
     this.router.navigate(['/pre-auth/landingpage/login']);
  }

}
