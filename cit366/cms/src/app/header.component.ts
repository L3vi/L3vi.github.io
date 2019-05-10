import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedTab = new EventEmitter<String>();

  onTabSelected(tab: String) {
    this.selectedTab.emit(tab);
  }

  constructor() { }

  ngOnInit() {
  }

}
