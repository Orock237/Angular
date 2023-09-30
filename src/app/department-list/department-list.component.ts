import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments ;
  constructor(private router: Router, private route: ActivatedRoute, private _departmentService: DepartmentService){

  }

  ngOnInit(): void {
    this._departmentService.getDepartments()
    .subscribe(data => this.departments = data);
  }

//Navigate to the department-detail of the selected department
  onSelect(department){
    this.router.navigate(['/department-list', department.id]);
    // this.router.navigate([department.id], {relativeTo: this.route});
  }


}

