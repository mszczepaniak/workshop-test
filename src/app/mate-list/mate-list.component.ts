import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {MateService} from '../services/mate.service';
import {ToasterService} from '../services/toaster.service';
import {NgFor} from '@angular/common/src/directives/ng_for_of';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'westie-mate-list',
  template: `
    <div class="container bg-info">
      <span class="text-primary">Welcome {{username}}</span>
      <h1 class="text-center">WESTIE MATES </h1>
      <div *ngIf="mates">
        <div *ngFor="let mate of mates; let i=index">
          <westie-mate
            [mate]="mate"
            [mateNo]="i"
            (mateSelected) = "handleMateSelected($event)"
          >
          </westie-mate>
          <hr>
        </div>
      </div>
      </div>
  `
})
export class MateListComponent implements OnInit {
  mates: any;
  username: string;
  constructor(
    private mateService: MateService, private toasterService: ToasterService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.username = this.route.snapshot.params['username'] || 'unknown';
    this.mateService.getMates()
      .then((mates) => {
        console.log(mates);
        this.mates = mates;
        console.log(this.mates);
      });
  }

  handleMateSelected(mate) {
    this.toasterService.success(mate.name, 'SELECTED!');
    this.router.navigateByUrl(`/mates/details/${mate.id}`);
  }


}
