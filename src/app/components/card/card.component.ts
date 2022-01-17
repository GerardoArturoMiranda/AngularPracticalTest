import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input()
  id: string
  @Input()
  assignees: string;
  @Input()
  workflow_name: string;
  @Input()
  review_score: number;
  @Input()
  idea_summary: string;
  @Input()
  author: string;
  @Input()
  date: string;
  @Input()
  picture: string;

  constructor(private api: ApiService, private router: Router) { 
    this.id = "";
    this.assignees = "";
    this.workflow_name = "";
    this.review_score = 0,
    this.idea_summary = "",
    this.author = "",
    this.date = "",
    this.picture ="../../../assets/Angular ExamDesktopView.png"
  }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

  async updateIdea(idIdea: string){
    var newAssignee = "";
    var newWorkflow ="";
    var newScore = 0;
    var newAuthor ="";
    var newPic = "";
    try {
      const assignee = await Swal.fire({
        title: 'Assignee',
        input: 'text',
        inputLabel: 'Who is going to be the new assignee?',
        inputPlaceholder: this.assignees,
        inputValue: '',
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Validate",
        cancelButtonText: "Cancel",
        inputAttributes: {
          autocapitalize: 'off',
          autocorrect: 'off'
        },
      });
      if(assignee.value) {
       newAssignee = assignee.value
      }
      const workflow = await Swal.fire({
        title: 'Assignee',
        input: 'text',
        inputLabel: 'Which is the new name of this workflow?',
        inputPlaceholder: this.workflow_name,
        inputValue: '',
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Validate",
        cancelButtonText: "Cancel",
        inputAttributes: {
          autocapitalize: 'off',
          autocorrect: 'off'
        },
      });
      if(workflow.value) {
        newWorkflow = workflow.value
      }
      const score = await Swal.fire({
        title: 'Assignee',
        input: 'number',
        inputLabel: 'Which is the new score? (1,2,3,4 or 5)',
        inputPlaceholder: String(this.review_score),
        inputValue: '',
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Validate",
        cancelButtonText: "Cancel",
        inputAttributes: {
          autocapitalize: 'off',
          autocorrect: 'off'
        },
      });
      if(score.value) {
       newScore = Number(score.value)
      }
      const author = await Swal.fire({
        title: 'Assignee',
        input: 'text',
        inputLabel: 'Who is the new author?',
        inputPlaceholder: this.author,
        inputValue: '',
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Validate",
        cancelButtonText: "Cancel",
        inputAttributes: {
          autocapitalize: 'off',
          autocorrect: 'off'
        },
      });
      if(author.value) {
       newAuthor = author.value
      }
      const route = await Swal.fire({
        title: 'Assignee',
        input: 'text',
        inputLabel: 'Which is the new image route?',
        inputPlaceholder: this.picture,
        inputValue: '',
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Validate",
        cancelButtonText: "Cancel",
        inputAttributes: {
          autocapitalize: 'off',
          autocorrect: 'off'
        },
      });
      if(route.value) {
       newPic = route.value
      }
      this.api.updateIdea(idIdea, newAssignee, newWorkflow, newScore, newAuthor, newPic).subscribe(async (resp) => {
        console.log(resp)
        await Swal.fire({
          icon: 'success',
          title: 'Editado',
          text: 'Success'
        });
        window.location.reload();
      });
  
    } catch (error) {

        }
  }

  async delIdea(idIdea: string){
    console.log(idIdea)
    try {
      const result = await Swal.fire({
        icon: 'warning',
        title: 'Delete Idea',
        text: '¿Are you sure?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel"
      });
      
      if(result.value) {
        this.api.delIdea(idIdea).subscribe(async (resp) => {
          console.log(resp)
          await Swal.fire({
            icon: 'success',
            title: 'Deleted',
            text: 'Success'
          });
          window.location.reload();
        });
    
      }
    } catch (error) {
    }
  }


}
