import { Component, NgZone, ElementRef } from '@angular/core';
import { UserService } from './../services/jsonLoader.service';
//import { ShipsService } from './comp1.service2';

@Component({

  templateUrl: './jsonLoader.component.html',
  styleUrls: ['./jsonLoader.component.css'],

  providers: [UserService]
})
export class jsonLoader {

   profiles:Object;
   json:Object;

  constructor(private el: ElementRef, public zone: NgZone, private userService: UserService) { 

    

     this.profiles = {};
     var native = this.el.nativeElement;
     this.json = native.getAttribute("json");



}

   loadUser = function() {
      this.userService.getData(this.json).subscribe(  data => {this.zone.run(() => this.profiles = data.results);console.log (this.profiles)});
    
  };
  

   makeArray = function (val) {
  return Array.from(val);
}
  }




