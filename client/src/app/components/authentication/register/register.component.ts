import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) {}

  register() {
    if (this.password === this.confirmPassword) {
      this.authService.register(this.firstname, this.lastname, this.email, this.password).subscribe(
        success => console.log('Registration Successful'),
        error => console.error(error)
      );
    } else {
      console.error('Passwords do not match');
    }
  }
}
