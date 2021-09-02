import { Component, Input, OnInit } from '@angular/core';

import { faTwitter,faFacebook, faInstagram,faLinkedinIn,faGithub,faGoogle,faAngular} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faGoogle = faGoogle;

  


  ngOnInit(): void {
  }

}
