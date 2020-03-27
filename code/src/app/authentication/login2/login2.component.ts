import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'; 
import { first } from 'rxjs/operators'
import { AuthenticationService } from '../../_services/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})
export class Login2Component implements OnInit, AfterViewInit {
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    signinForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

  ngOnInit() {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngAfterViewInit() {
    $(function() {
      $('.preloader').fadeOut();
    });
    $('#to-recover').on('click', function() {
      $('#signinForm').slideUp();
      $('#recoverform').fadeIn();
    });
  }

  get f() {return this.signinForm.controls; }

  onSubmit() {
      console.log("submit signin")
      if(this.signinForm.invalid) {
          return;
      }

      this.submitted = true;
      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
                this.submitted = false;
            });
  }
}
