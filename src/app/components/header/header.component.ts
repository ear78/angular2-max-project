import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // allowNewServer = true;
  // serverCreationStatus = "No server was created";
  // serverName = '';
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = false;
    // }, 2000);
  }

  ngOnInit() {

  }

  // onCreateServer(){
  //   this.serverCreationStatus = "Server was created!";
  // }
  //
  // onUpdateServerName(event){
  //   this.serverName = event.target.value;
  // }

}
