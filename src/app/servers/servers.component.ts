import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created";
  serverName="server1";
  serverCreated = false;
  servers = ["testserver2", "testserver3"];
  
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  onServerCreation(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was Created just now and its name is " + this.serverName
  }

  ngOnInit(): void {
  }

}
