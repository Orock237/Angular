import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';
import { IDepartment } from '../department';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public  departments : IDepartment[] = [];
  public department_name;
  public department_type;
  public departmentId;
  constructor(private route: ActivatedRoute, private _departmentService: DepartmentService){}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.departmentId = id;
    this._departmentService.getDepartments()
    .subscribe(data => {this.departments = data as IDepartment[]});
    console.log(this.departments[0]);
    this.department_name = this.departments[this.departmentId - 1].name;
  }
}
