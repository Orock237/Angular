import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css']
})
export class UnitTestComponent implements OnInit {

  public name;
  public displayText = true;
  public color = "red"
  public title = "Welcome"
  public message = "Hello World !"
  public person = {
    "firstName": "Anderson",
    "lastName": "Orock"
  }
  public date = new Date();
  ngOnInit(): void {
    
  }
  logMessage(value){
    console.log(value);
  }
}
