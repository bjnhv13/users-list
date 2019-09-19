
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-display-row',
  templateUrl: './display-row.component.html',
  styleUrls: ['../users-table/users-table.component.css']
})

export class DisplayRowComponent {
  @Input() data: User;
  @Input() header: boolean;
  @Input() edit: boolean;
  @Output() handleToggleEdit = new EventEmitter<any>();

  toggleEdit() {
    console.log("toggle");
    this.handleToggleEdit.emit();
  }

}
