import { Component, OnInit,Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-clinic',
  templateUrl: './edit-clinic.component.html',
  styleUrls: ['./edit-clinic.component.css']
})
export class EditClinicComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  @Input() formClinicId: number;

  @Input() formClinicName: string;

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }


}
