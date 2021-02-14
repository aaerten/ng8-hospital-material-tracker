import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css']
})
export class AddClinicComponent implements OnInit {

  clinicForm = new FormGroup({
    id: new FormControl(''),
    clinic_name: new FormControl(''),
  });

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  addClinic(){
    var body ={...this.clinicForm.value};
    console.log(body);
  }

}
