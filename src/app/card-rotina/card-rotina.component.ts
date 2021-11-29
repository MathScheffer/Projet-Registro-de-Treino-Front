import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-rotina',
  templateUrl: './card-rotina.component.html',
  styleUrls: ['./card-rotina.component.css']
})
export class CardRotinaComponent implements OnInit {
  @Input() nome = "";
  @Input() link = "";

  constructor() { }

  ngOnInit(): void {
  }

}
