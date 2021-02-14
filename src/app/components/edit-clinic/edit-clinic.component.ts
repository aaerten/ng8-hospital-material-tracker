import { Component, OnInit,Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-clinic',
  templateUrl: './edit-clinic.component.html',
  styleUrls: ['./edit-clinic.component.css']
})
export class EditClinicComponent implements OnInit {

  clinicEditForm = new FormGroup({
    id: new FormControl(''),
    clinic_name: new FormControl(''),
  });

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  @Input() formClinicId: number;

  @Input() formClinicName: string;

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  editClinic() {
    var body = { ...this.clinicEditForm.value };
    console.log(body);
  }


}
