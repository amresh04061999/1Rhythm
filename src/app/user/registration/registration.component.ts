import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { city, country, state } from '../model/filter.model';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public UserFrom: FormGroup;
  public isSubmited: boolean;

  public countries: country[] = [];
  public states: state[] = [];
  public cities: city[] = [];
  public note: string;
  public dNone: string;
  public msg: string;
  public imageFile!: File
  public base64String: any;
  public isImagevalue: boolean;
  public statesData?: any;
  public citiesData?: any;
  constructor(private fb: FormBuilder,
    private httpServices: ServicesService) {
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
      Email: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^(?=.*?[_.]).*([a-z0-9])+@([a-z\-]{2,}\.)+[a-z\-]{2,4}$/)]],
      Password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$%*?&/\\\[\],'`~(\)^=+{\}?|;"\-:#_])[A-Za-z\d@$%*?&/\\\[\],'`~(\)^=+{\}?|;"\-:#_]{0,}$/), Validators.minLength(8), Validators.maxLength(30)]],
      CountryId: ['',],
      StateId: ['', Validators.required],
      CityId: ['', Validators.required],
      UserTypeId: ['', Validators.required],
      DisplayPicture: [''],
      country: [''],
      state: [''],
      city: ['']
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
    this.getCountryList();
    this.getStateList();
    this.getCityList();
  }
  /**
     * Function for company logo uploading
     * @param event
     */
  selectFile(event: any) {
    /**
     *show message validation
     */
    let imageType = event.target.files[0]
    if (!imageType.name.match('\.(jpg|jpeg|png|heif)$')) {
      this.msg = "“Please upload a valid file format”(Supported file  formats: .jpg, .png, .jpeg, .heif).";
      this.base64String = ''
      return;
    }

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



  // drowpdown......................
  /***
   * Get country
   */
  getCountryList() {
    this.httpServices.getCountries().subscribe((res: country[]) => {
      this.countries = res
    })
  }

  getStateList() {
    this.httpServices.getStates().subscribe((res: state[]) => {
      this.states = res

    })

  }
  getCityList() {
    this.httpServices.getCity().subscribe((res: city[]) => {
      this.cities = res

    })

  }


  // logic
  onChangeCountry(countryId: any) {
    // console.log(this.states);
    const Id = countryId.target.value;
    console.log("country", Id)
    if (Id) {
      this.statesData = this.states.filter((res) => Id == res.countryId);
      console.log(this.statesData);
      this.UserFrom.controls['state']?.enable()
    }

  }
  onChangeState(stateId: any) {
    const Id = stateId.target.value;
    console.log("state", Id)
    if (Id) {
      this.citiesData = this.cities.filter((res) => Id == res.stateId);
      console.log(this.citiesData);
      this.UserFrom.controls['city']?.enable()
    }
  }

}
