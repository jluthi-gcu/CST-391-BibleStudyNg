import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Bible Study Administration';
  version = '1.0';


  constructor(private router: Router){}

  
  displayVersion() {
  
    // javascript alert to display the version of the application as well as other information
    alert("Bible Study Admin 2024™\nWritten In: Angular\nVersion: " + this.version);

  }

  displayBibleStudyList() {
    // navigate to the list-studies route
    this.router.navigate(['list-studies'], { queryParams: { data: new Date()} });

  }



}
