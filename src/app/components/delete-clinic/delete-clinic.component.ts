import { Component, OnInit,Input } from '@angular/core';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-delete-clinic',
  templateUrl: './delete-clinic.component.html',
  styleUrls: ['./delete-clinic.component.css']
})
export class DeleteClinicComponent implements OnInit {

  constructor(private rs: RestService) { }

  ngOnInit() {
  }

  @Input() id:number;

  deleteClinic(){
    this.rs.deleteClinicByID(this.id).subscribe()
  }

}
