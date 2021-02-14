import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { Equipments } from 'src/app/equipments';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})

export class EquipmentsComponent implements OnInit {

  constructor(private rs: RestService) { }

  equipments: Equipments[] = [];
  equipment_name:any;
  p:number=1;

  ngOnInit():void{
    this.rs.refreshNeeded$.subscribe(() => {
      this.getAllEquipments();
    })
    this.getAllEquipments();
  }

  private getAllEquipments() {
    this.rs.getEquipments().subscribe(
      (response) => {
        this.equipments = response;
      },
      (error) => console.log(error)
    )
  }

  Search() {
    if (this.equipment_name == "") {
      this.ngOnInit();
    } else {
      this.equipments = this.equipments.filter(res => {
        return res.equipment_name.toLocaleLowerCase().match(this.equipment_name.toLocaleLowerCase());
      })
    }
  }

  key: string = "id";
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
