import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { IUser } from '../../models/models';
import { UserService } from '../../services/user.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  USERS_DATA!: IUser[];
  displayedColumns: string[] = ['orgName', 'userName', 'email', 'phoneNumber', 'createdAt', 'status'];
  dataSource = new MatTableDataSource<IUser>(this.USERS_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService,
              private _liveAnnouncer: LiveAnnouncer,
              ) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe({
        next: (data) => {
          this.USERS_DATA = data;
          this.dataSource =  new MatTableDataSource<IUser>(this.USERS_DATA);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      })
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
