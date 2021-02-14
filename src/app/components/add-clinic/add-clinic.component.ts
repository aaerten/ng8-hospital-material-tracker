import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestService } from '../../rest.service';


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

  constructor(private modalService: NgbModal, private rs: RestService) { }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  addClinic(body) {
    body = { ...this.clinicForm.value };
    this.rs.addClinic(body).subscribe()
  }

}
