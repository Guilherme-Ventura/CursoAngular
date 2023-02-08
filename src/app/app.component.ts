import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';
  userData = { // ==> objeto
    email: 'joaquim@email.com',
    role: 'Admin'
  }
  userAge = 28;

  title = 'CursoHoraDeCodar';
}
