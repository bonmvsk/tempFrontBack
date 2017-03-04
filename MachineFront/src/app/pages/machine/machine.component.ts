import { Component, OnInit } from '@angular/core';

import { Machine } from './../../models/machine';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {
  _machine = new Machine();
  constructor() {
    this._machine.acceptCoinText = '1,5';
  }

  ngOnInit() {
  }

  addCoin(v:number){
    this._machine.addCoin(v);
    console.log(this._machine);
  }

}
