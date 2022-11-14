import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public UserFrom:FormGroup;
  public isSubmited:boolean;
  public note:string;
  public dNone:string
  constructor(private fb :FormBuilder) { 
    this.dNone='none'
    this.note=''
    this.isSubmited=false
    this.UserFrom=this.fb.group({
      Phone:['',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^[0-9]+$/),
      ]],
      UserTypeId:['',Validators.required],
      FirstName:['',[Validators.required,Validators.maxLength(25),Validators.pattern('^[a-zA-Z]+$')]],
      LastName:['',[Validators.required,Validators.maxLength(25),Validators.pattern('^[a-zA-Z]+$')]],
      Email:['',[Validators.required,Validators.maxLength(50),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(30),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')]],
    })
  }
  public onRegistration():void{
    this.isSubmited =true

  }
  selectedOption(value:any){
    const select=value.target.value[0]
     if(select == 1){
      this.note='Please enter your studio information in the "Manage Studio" section from your profile.'
      this.dNone=''

    }else if(select == 2 ){
      this.note='Please enter your artist information in the “Manage artist Profile” section from your profile'
      this.dNone=''
    }
    else if(select == 3){
      this.note=''
      this.dNone='none'
    }
    
  }
  
  // geter function
  get validator(): { [key: string]: AbstractControl<any> } {
    return this.UserFrom.controls;
  }
  ngOnInit(): void {
  }

}
