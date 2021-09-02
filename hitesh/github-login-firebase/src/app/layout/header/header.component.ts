import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import {ToastrService} from 'ngx-toastr'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) { 

    auth.getUser().subscribe((user)=>{
      this.email = user?.email;
    })
  }

  ngOnInit(): void { }

    async userSignOut (){
      try{
          const rest = await this.auth.signOut()
          this.router.navigateByUrl('/signIn')
          this.toastr.info("signin to continue")
          this.email = null;
      }catch{
        this.toastr.error("something not right")
      }
    }



}
