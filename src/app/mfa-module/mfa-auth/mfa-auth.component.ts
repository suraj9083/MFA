import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-mfa-auth',
  templateUrl: './mfa-auth.component.html',
  styleUrls: ['./mfa-auth.component.scss']
})
export class MfaAuthComponent implements OnInit {

  qrImg: any;
  secret: String = '';
  token = new FormGroup({
    token: new FormControl(''),
  })

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.service.qr().then((Resp) => {
      console.log(Resp)
      this.qrImg = Resp.qrCodeUrl
      this.secret = Resp.secret
    });
  }

  getVerify() {
    console.log("Token >>>", this.token.value);
    this.service.veriTOTP(this.token.value).then((Resp: any) => {
      if (Resp.status == "success") {
        alert(Resp.msg);
        this.router.navigate(['/home'])
      }
      else {
        alert(Resp.msg);
        window.location.reload();
      }
    })
  }

}
