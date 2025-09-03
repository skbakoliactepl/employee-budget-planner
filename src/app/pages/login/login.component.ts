import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { eyeIcon, eyeSlashIcon } from '@progress/kendo-svg-icons';
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_LABELS } from "@progress/kendo-angular-label";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputsModule,
    ButtonsModule,
    LabelModule,
    KENDO_INPUTS,
    KENDO_BUTTONS,
    KENDO_LABELS
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public passInputType: "password" | "text" = "password";
  public passIcon = eyeSlashIcon;

  constructor(private fb: FormBuilder, private router: Router) { }
  loginForm = this.fb.group({
    identifier: ['', [Validators.required, this.identifierValidator]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  identifierValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return { required: true };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernamePattern = /^[a-zA-Z0-9._-]{3,}$/;

    if (emailPattern.test(value) || usernamePattern.test(value)) {
      return null; // valid
    }

    return { invalidIdentifier: true };
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // TODO: Replace with actual API auth
      console.log('Login success:', this.loginForm.value);
      this.router.navigate(['/dashboard']);
    }
  }

  togglePasswordVisibility(): void {
    const isHidden = this.passInputType === "password";
    this.passInputType = isHidden ? "text" : "password";
    this.passIcon = isHidden ? eyeIcon : eyeSlashIcon;
  }

}
