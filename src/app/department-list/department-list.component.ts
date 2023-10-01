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
  public errorMsg;
  public selectedId;
  
  constructor(private router: Router, private route: ActivatedRoute, private _departmentService: DepartmentService){

  }

  ngOnInit(): void {

      this._departmentService.getDepartments()
      .subscribe({
        next: data => this.departments = data ,
        error: err => this.errorMsg = err,
      });

      this.route.paramMap.subscribe((params: ParamMap) => {
        let id = Number(params?.get('id'));
        this.selectedId = id;
      });
  

  }

//Navigate to the department-detail of the selected department
  onSelect(department){
    this.router.navigate(['/department-list', department.id]);
    //Or
    //Relative Navigation
    //this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }



}

