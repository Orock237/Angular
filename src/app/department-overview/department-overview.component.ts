import { Component } from '@angular/core';

@Component({
  selector: 'app-department-overview',
  templateUrl: './department-overview.component.html',
  styleUrls: ['./department-overview.component.css']
})
export class DepartmentOverviewComponent {

  public ngOnInit() {
    const modus = "ON" | "OFF";

    if(modus === "ON") {
      console.warn("The ON modus will be activate")
    } else {
      console.warn("The OFF modus will be activate")
    }
    
  }

}
