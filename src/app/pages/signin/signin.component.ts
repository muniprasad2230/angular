import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/sevices/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private auth:AuthService,
              private toastr:ToastrService,
              private router:Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    const {email,password} = f.form.value
    this.auth.signin(email,password)
    .then((rec)=>{
      this.router.navigateByUrl('');
      this.toastr.success("signin successful")
    })
    .catch((err)=>{
      this.toastr.error("signin failed");
    })
  }



}
