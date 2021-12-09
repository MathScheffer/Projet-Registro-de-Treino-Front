import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  dias = ["SEG", "TER", "QUA", "QUI", "SEX"];
  caminho_rotina = "/home/rotina";
  constructor() { }

  ngOnInit(): void {
  }

}
