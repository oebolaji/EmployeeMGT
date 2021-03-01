import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/dialog.service';
import {SharedService} from '../../shared.service';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService,
     private snackbar: MatSnackBar,
     private dialogService: DialogService
     ) { }


  DepartmentList:any=[];

  ModalTitle:string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=> {
      this.DepartmentList=data;
    })
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item){
    this.dep = item;
    this.ModalTitle = "Edit Department " + item.DepartmentName ;
    this.ActivateAddEditDepComp = true;

  }

  deleteClick(item){
    // if(confirm('Are you Sure you want to delete for '+ item.DepartmentName)){
    //   this.service.deleteDepartment(item.DepartmentId).subscribe(data => {
    //     alert(data.toString());
    //     this.refreshDepList();
    //   })
    // }

    this.dialogService.openConfirmDialog();





  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }

}
