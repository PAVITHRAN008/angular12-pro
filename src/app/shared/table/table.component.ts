import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
 @Output() openDialog = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
users = [
    { name: 'John Michael', role: 'Manager', createdDate: '23/04/18' },
    { name: 'Alexa Liras', role: 'Developer', createdDate: '12/06/19' },
    { name: 'Laurent Perrier', role: 'Admin', createdDate: '04/01/21' }
  ];

  editUser(user: any) {
     let data:any={};
    data.isAction='edit';
    data.tableRow=user;
    console.log('Edit user:', user);
    this.openDialog.emit(data);
  }
  deleteUser(user: any) {
    let data:any={};
    data.isAction='delete';
    data.tableRow=user;
    console.log('Delete user:', user);
    this.openDialog.emit(data);
  }
}
