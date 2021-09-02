import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import {GithubService} from "./../../services/github.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user :any ;
  error :any;
  userName = ""
  constructor(private ref: ChangeDetectorRef, private githubservice:GithubService) { }

  ngOnInit(): void { }

  FindUser(){
    this.githubservice.getUserDeails(this.userName).subscribe(
      (user) => {
        this.user = user ;
        this.error = '';
        this.ref.detectChanges();
       },
       (err) => {this.user= null;
        this.error = 'user not found';
       this.ref.detectChanges();}
    )
  }

}
