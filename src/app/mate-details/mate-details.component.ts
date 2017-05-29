import {Router} from '@angular/router';
import {MateService} from '../services/mate.service';
import {OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Component} from '@angular/core';

@Component({
  selector: 'westie-mate-details',
  template: `
    <div class="jumbotron text-center">
      <h1>{{mate.name}}</h1>
      <div *ngIf="mate">
        <p>{{mate.id}}</p>
        <p>{{mate.email}}</p>[]
        <p>{{mate.website}}</p>
        <p>{{mate.phone}}</p>
      </div>
    </div>
  `
})
export class MateDetailsComponent implements OnInit {
  mate: any;
  constructor(private router: Router, private route: ActivatedRoute, private mateService: MateService) {
  }

  ngOnInit() {
    this.mate = this.mateService.getMate(this.route.snapshot.params['id'])
                                .then((mate) => {
                                  this.mate = mate;
                                  console.log(`MAte: `, JSON.stringify(mate, null, 4));
                                });
  }
}
