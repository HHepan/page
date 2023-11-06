import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';

  constructor(private router: Router) {
    if (localStorage.getItem('init') === null) {
      this.router.navigate(['/index']);
      localStorage.setItem('init', String(true));
    }
  }
}
