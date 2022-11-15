import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public UserFrom: FormGroup;
  public isSubmited: boolean;
  public note: string;
  public dNone: string;
  public msg: string;
  public imageFile!: File
  public base64String: any;
  public isImagevalue: boolean;
  constructor(private fb: FormBuilder) {
    this.dNone = 'none'
    this.note = ''
    this.msg = ''
    this.isSubmited = false
    this.isImagevalue = false;
    this.UserFrom = this.fb.group({
      Phone: ['',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern(/^[0-9]+$/),
        ]],
      FirstName: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z]+$')]],
      LastName: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z]+$')]],
      Email: ['', [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'), Validators.minLength(8), Validators.maxLength(30)]],
      CountryId: ['',],
      StateId: ['', Validators.required],
      CityId: ['', Validators.required],
      UserTypeId: ['', Validators.required],
      DisplayPicture: ['']
    })
  }
  public onRegistration(): void {
    this.isSubmited = true

  }
  selectedOption(value: any) {
    const select = value.target.value[0]
    if (select == 1) {
      this.note = 'Please enter your studio information in the "Manage Studio" section from your profile.'
      this.dNone = ''

    } else if (select == 2) {
      this.note = 'Please enter your artist information in the “Manage artist Profile” section from your profile'
      this.dNone = ''
    }
    else if (select == 3) {
      this.note = ''
      this.dNone = 'none'
    }

  }

  // geter function
  get validator(): { [key: string]: AbstractControl<any> } {
    return this.UserFrom.controls;
  }
  ngOnInit(): void {
  }
  /**
     * Function for company logo uploading
     * @param event
     */
  selectFile(event: any) {
    /**
     *show message validation
     */
    let  imageType = event.target.files[0]
     if (!imageType.name.match(/\.(jpg|jpeg|png|heif)$/)) {
      this.msg = "“Please upload a valid file format”(Supported file  formats: .jpg, .png, .jpeg, .heif).";
      this.base64String = ''
      return ;
    }
    //  let imageType = event.target.files[0].type;
    // if (imageType.match(/image\/*/) == 'image/jpg' ) {
    //   this.msg = "“Please upload a valid file format”(Supported file  formats: .jpg, .png, .jpeg, .heif).";
    //   return;
    // }
   
    
    let imageSize = event.target.files[0].size;
    if (imageSize >= 5000000) {
      this.msg = " “The maximum size of an image must be less than 5 MB”.";
      this.base64String = ''
      return;
    }

    /**
     * image priview and convert base64
     */
    this.imageFile = event.target.files[0];
    // console.log(this.imageFile)
    let reader = new FileReader();
    reader.readAsDataURL(this.imageFile);
    reader.onload = () => {
      // convert base64
      this.base64String = reader.result
      this.msg = "";
    }
   
  }

}
