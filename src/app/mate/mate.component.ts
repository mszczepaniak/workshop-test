import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'westie-mate',
  templateUrl: './mate.component.html',
  styleUrls: ['./mate.component.css']
})
export class MateComponent implements OnInit {
  @Input() mate: any;
  @Input() mateNo: number;
  @Output() mateSelected = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(this.mate, null, 4));
  }

  select(mateName, mateId) {
    this.mateSelected.emit({name: mateName, id: mateId});
  }
}
