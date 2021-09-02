import { Component, Input, OnInit, SimpleChanges,OnChanges,ChangeDetectorRef } from '@angular/core';
import {GithubService} from "./../../services/github.service"
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl : string | undefined
  repos = []
  constructor(
    private githubservice: GithubService, 
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit(): void { }
    ngOnChanges(): void{
      if (this.repoUrl){
        this.githubservice.getRepos(this.repoUrl).subscribe((repos:any) =>{
          this.repos = repos;
          this.ref.detectChanges();
        },
        (err) =>{
          console.log(err);
          
        } );

      }
      
    }
}
