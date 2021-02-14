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

  columns = ["Id","Clinics Name"];

  clinics : Clinics[]=[];

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
}
