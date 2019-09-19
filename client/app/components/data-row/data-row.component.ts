import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { User } from '../../models/user';


@Component({
  selector: 'app-edit-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['../users-table/users-table.component.css']
})
export class EditRowComponent {
  @Input() data: User;
  @Input() header: boolean;
  @Input() edit: boolean;
  @Output() handleToggleEdit = new EventEmitter<any>();

  toggleEdit() {
    console.log(this.data);
    if ( typeof this.data.privileges === "string") {
      this.data.privileges = this.data.privileges.split(',')
    }
    this.handleToggleEdit.emit(this.data);
  }

}
