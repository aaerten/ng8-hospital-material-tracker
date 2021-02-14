import { Component, OnInit } from '@angular/core';
import {RestService} from'../../rest.service';
import {Clinics} from '../../clinics';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})

export class ClinicsComponent implements OnInit{

  constructor(private rs : RestService) { }
  
  clinics : Clinics[]=[];
  clinic_name:any;
  p: number=1;


  ngOnInit(): void {

    this.rs.refreshNeeded$.subscribe(()=>{
      this.getAllClinics();
    })
    this.getAllClinics();
  }

private getAllClinics(){
    this.rs.getClinics().subscribe(
      (response)=>{
        this.clinics=response;
      },
      (error)=> console.log(error)
    )
  }

Search(){
  if(this.clinic_name==""){
    this.ngOnInit();
  }else{
    this.clinics=this.clinics.filter(res =>{
      return res.clinic_name.toLocaleLowerCase().match(this.clinic_name.toLocaleLowerCase());
    })
  }
}

key :string = "id";
reverse:boolean=false;
sort(key){
this.key=key;
this.reverse= !this.reverse;
}


}
