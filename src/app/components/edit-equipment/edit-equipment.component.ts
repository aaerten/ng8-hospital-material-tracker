import { Component, OnInit,Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms'
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.css']
})
export class EditEquipmentComponent implements OnInit {

    equipmentEditForm = new FormGroup({
    id: new FormControl(''),
    equipment_name: new FormControl(''),
    date_of_supply: new FormControl(''),
    number_of_equipments: new FormControl(''),
    unit_price: new FormControl(''),
    usage_rate: new FormControl(''),
    clinic_name: new FormControl(''),
  });

  constructor(private modalService: NgbModal, private rs: RestService) { }

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

  editEquipment(body) {
    body = { ...this.equipmentEditForm.value };
    this.rs.updateEquipmentByID(body.id,body).subscribe();
  }

}
