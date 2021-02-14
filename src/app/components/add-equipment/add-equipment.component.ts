import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  equipmentForm = new FormGroup({
    id:new FormControl(''),
    equipment_name:new FormControl(''),
    date_of_supply: new FormControl(''),
    number_of_equipments:new FormControl(''),
    unit_price:new FormControl(''),
    usage_rate: new FormControl(''),
    clinic_name: new FormControl(''),
  });

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  addEquipment() {
    var body = { ...this.equipmentForm.value };
    console.log(body);
  }

}
