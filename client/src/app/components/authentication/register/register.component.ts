import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) {}

  register() {
    console.log('Password:', this.password, 'Confirm Password:', this.confirmPassword);
    if (this.password === this.confirmPassword) {
      this.authService.register(this.first_name, this.last_name, this.email, this.password, this.confirmPassword).subscribe(
        success => console.log('Registration Successful', success),
        error => console.error('Registration Error', error)
      );
    } else {
      console.error('Passwords do not match');
    }
  }

}
