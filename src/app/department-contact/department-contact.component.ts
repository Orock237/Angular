import { Component } from '@angular/core';

@Component({
  selector: 'app-department-contact',
  templateUrl: './department-contact.component.html',
  styleUrls: ['./department-contact.component.css']
})
export class DepartmentContactComponent {

  private async generateListDepartmen() {
    try{
      const result = await fetchData();
      result.filter(item => !item.includes("24"))
    }
    catch(){
      console.error("List od departments not founf")
    }

}
