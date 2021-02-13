import { Component, OnInit,Input } from '@angular/core';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-delete-equipment',
  templateUrl: './delete-equipment.component.html',
  styleUrls: ['./delete-equipment.component.css']
})
export class DeleteEquipmentComponent implements OnInit {

  constructor(private rs: RestService) { }

  ngOnInit() {
  }

  @Input() id: number;

  deleteEquipment() {
    this.rs.deleteEquipmentByID(this.id).subscribe()
  }

}
