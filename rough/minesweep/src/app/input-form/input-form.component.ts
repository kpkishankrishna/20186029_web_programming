import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function validateForm() {
      var x = document.forms["input"]["firstname"].value;
      var y = document.forms["input"]["lastname"].value;
      console.log(x);
      console.log(y);
      if (x == "" || y == "") {
        return false;
        alert("jds");
      }
      // else {
      //   load();
      // }
      var d = document.forms["input"]["firstname"];
      d.disabled = true;
    }
  }

}
