import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id!: string;
  user!: IUser | null;

  rating:number = 1;
  starCount:number = 3;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) this.id = id;
  }

  ngOnInit() {
    this.userService.getUser(this.id)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.user = response;
        }
      })
  }

  onRatingChanged(rating: number){
    console.log(rating);
    this.rating = rating;
  }
}
