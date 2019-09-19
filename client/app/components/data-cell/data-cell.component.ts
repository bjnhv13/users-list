import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['../users-table/users-table.component.css']
})
export class DataCellComponent implements OnInit {
  @Input() data = "";
  @Input() edit: boolean;
  @Output() newData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  handleChange(event) {
    console.log(event);
    this.newData.emit(this.data)
  }

}
