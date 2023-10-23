import { Component } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})

export class PasswordInputComponent {
  password: string = '';

  checkStrength(): void {
    const strengthBars = document.querySelectorAll<HTMLElement>('.strength-bar');
    const containsLetters: boolean = /[a-zA-Z]/.test(this.password);
    const containsDigits: boolean = /\d/.test(this.password);
    const containsSymbols: boolean = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (this.password.length === 0) {
      strengthBars.forEach((bar: HTMLElement) => bar.style.backgroundColor = 'gray');
    } else if (this.password.length < 8) {
      strengthBars.forEach((bar: HTMLElement) => bar.style.backgroundColor = 'red');
    } else {
      if (containsLetters && containsDigits && containsSymbols) {
        strengthBars.forEach((bar: HTMLElement) => bar.style.backgroundColor = 'green');
      } else if ((containsLetters && containsDigits) || (containsLetters && containsSymbols) || (containsDigits && containsSymbols)) {
        strengthBars[0].style.backgroundColor = strengthBars[1].style.backgroundColor = 'yellow';
        strengthBars[2].style.backgroundColor = 'gray';
      } else {
        strengthBars[0].style.backgroundColor = 'red';
        strengthBars[1].style.backgroundColor = strengthBars[2].style.backgroundColor = 'gray';
      }
    }
  }
}

