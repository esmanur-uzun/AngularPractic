import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comments } from '../models/commenst';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  commentAddForm: FormGroup
  comments:Comments = new Comments
  createCommentAddForm(){
    this.commentAddForm = this.formBuilder.group({
      comment:["", Validators.required]
    })
  }

  add(){
    if(this.commentAddForm.valid){
      this.comments = Object.assign({},this.commentAddForm.value)
    }
  } 
  
  ngOnInit(): void {
  }

}
