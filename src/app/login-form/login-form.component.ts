import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  formGroup:any;
  loggedIn: boolean = false;

  constructor(
    private _authService:AuthServiceService, //Service acts as classes
    private router:Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loggedIn = this._authService.isLoggedIn(); //Check if logged in and store in state
  }


  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }

  loginProcess() {
    if (this.formGroup.valid) {
      this._authService.login(this.formGroup.value).subscribe(result => {
        console.log(`RESULT: ${result}`)
        if(result) {
          localStorage.setItem('token', result)
          this.router.navigate(['timer'])
        } else {
          console.log(result);
        }
      })
    }
  }

}
