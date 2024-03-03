
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './App.html',
  styleUrls: ['./App.css']
})
export class RegisterComponent {
title='Seppam'



isActive=true;
process:boolean = false;
albums:boolean = false;
otobox:boolean = false;
vms:boolean = false;
tally:boolean = false;


checkProcess(){
  this.process=!this.process;
}
checkAlbum(){
  this.albums=!this.albums;
}    
checkOto(){
  this.otobox=!this.otobox;
}    
checkVms(){
  this.vms=!this.vms;
}    
checkTally(){
  this.tally=!this.tally;
}
}
