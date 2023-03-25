import { Component } from '@angular/core';

@Component({
  selector: 'register-class-form',
  templateUrl: './register-class-form.component.html',
  styleUrls: ['./register-class-form.component.scss'],
})
export class RegisterClassFormComponent {
  teachers = ['Otávio', 'Carla', 'Leandro', 'Cláudia'];

  sendForm() {
    console.log('clicked');
  }
}
