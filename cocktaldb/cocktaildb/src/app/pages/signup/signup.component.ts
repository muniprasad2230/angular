import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService} from "./../../sevices/auth.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService,
              private router:Router,
              private toastr: ToastrService,
    ) { }

  ngOnInit(): void { }

  onSubmit(f:NgForm){

    const{email,password} = f.form.value;
    this.auth.signup(email,password)
    .then((rec)=>{
      this.router.navigateByUrl('/');
      this.toastr.success("signup successful")
    })
    .catch((err)=>{
      this.toastr.error("signup failed")
    })
  }



  }


