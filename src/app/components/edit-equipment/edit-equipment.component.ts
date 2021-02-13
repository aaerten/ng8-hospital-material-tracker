import { Component, OnInit,Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.css']
})
export class EditEquipmentComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  @Input() formId: number;
  @Input() formEquipmentName: string;
  @Input() formDateOfSupply: string;
  @Input() formNumberOfEquipment: number;
  @Input() formUnitPrice: number;
  @Input() formUsageRate: number;
  @Input() formClinicName: string;

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
