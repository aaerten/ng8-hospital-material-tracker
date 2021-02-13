import { Component, OnInit } from '@angular/core';
import { Equipments } from 'src/app/equipments';
import { RestService } from '../../rest.service';


@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  constructor(private rs: RestService) { }

  columns = ["Id","Equipment Name","Date of Supply","Number of Equipment","Unit Price","Usage Rate","Clinic Name"];

  equipments: Equipments[] = [];

  ngOnInit() {
    this.rs.getEquipments().subscribe(
      (response) => {
        this.equipments = response;
      },
      (error) => console.log(error)
    )
  }

}
