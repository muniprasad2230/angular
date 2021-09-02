import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import {finalize} from "rxjs/operators"
import {AngularFireStorage} from "@angular/fire/storage"
import {AngularFireDatabase} from "@angular/fire/database";




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
     
  constructor(
    private auth:AuthService,
    private router : Router,
    private DB: AngularFireDatabase,
    private storage:AngularFireStorage,
    private toastr : ToastrService,
  ) { }

  ngOnInit(): void {
  }

    onSubmit(f:NgForm){
      const{email,password,username,country,bio,name} = f.form.value;

      this.auth.signUp(email,password)
      .then((res)=>{
        console.log(res);
        const uid = res.user;
        this.DB.object(`/users/${uid}`)
        .set({
          id:uid,
          name:name,
          email:email,
          instaUserName:username,
          country:country,
          bio:bio,
          
        })
      })
      .then(()=>{
        this.router.navigateByUrl('/');
        this.toastr.error("signup success")
      })
      .catch((err)=>{
        this.toastr.error("signup failed")
      })
    }

}
