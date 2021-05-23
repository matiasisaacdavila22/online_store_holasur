import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerModel } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';


declare const showMessage: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fgValidator!: FormGroup;

  constructor(private fb: FormBuilder, private service: CustomerService) { }

  ngOnInit(): void {

      this.FormBuilding();

    }

    FormBuilding(){

      this.fgValidator = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        document: ['', [Validators.required, Validators.minLength(7),Validators.maxLength(30)]],
        phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]],
        email: ['', [Validators.email]],
        city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        address: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
        password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(25)]],
      });
      };

      CustomerRegisterFn(){
        if(this.fgValidator.invalid){
          showMessage('Invalid form');
        }else{
          let model = this.getCustomerData();
          console.log(model);
         this.service.CustomerRegistering(model).subscribe(
           data => {
            showMessage('register succesfully. you can find your password in your email inbox.')
           },
           error => {
             showMessage('error registering.:')
           }
         );

        }          
      }
      getCustomerData(): CustomerModel{
        let model = new CustomerModel();
          model.address = this.fgv.address.value;
          model.city = this.fgv.city.value;
          model.document = this.fgv.document.value;
          model.email = this.fgv.email.value;
          model.name = this.fgv.name.value;
          model.lastname = this.fgv.lastname.value;
          model.phone = this.fgv.phone.value;
          return model;
      }

      get fgv(){
        return this.fgValidator.controls;
      }
    
}
