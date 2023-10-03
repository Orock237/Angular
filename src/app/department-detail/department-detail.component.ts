import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DepartmentService } from '../department.service';
import { IDepartment } from '../department';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public  departments;
  public department;
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router,
     private _departmentService: DepartmentService){}

  ngOnInit(): void {
    let name = "Orock";
    console.log(`Hallo ${name}`);
    // let id = this.route.snapshot.paramMap.get('id');
    // this.departmentId = id;
    //OR
    //paramMap Observable
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params?.get('id'));
      this.departmentId = id;
    });

    this._departmentService.getDepartments()
    .subscribe(data => {this.departments = data as IDepartment[]});
    this.department = this.departments[this.departmentId - 1]; //TODO
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/department-list', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department-list', nextId]);
  }

  goBack(){
    let selectedId  = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/department-list', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route})
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
