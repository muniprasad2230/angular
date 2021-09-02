import { Component, OnInit } from '@angular/core';
import {AuthService } from "./../../services/auth.service"
import{ Router} from "@angular/router"
import{ToastrService } from "ngx-toastr"


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    email:any | undefined
  constructor( 
    private auth:AuthService,
    private router:Router,
    private toastr:ToastrService) {

      auth.getUser().subscribe((user)=>{this.email = user?.email;console.log(user)})
       }

  ngOnInit(): void {
  }

  async handleSignout(){
    try {
      await this.auth.signOut();
      this.router.navigateByUrl("/signin");
      this.email = null;
      this.toastr.info("logout success")

    } catch (error) {
      this.toastr.error("problem in")
    }
  }

}
