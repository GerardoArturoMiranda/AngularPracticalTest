export class Idea{
  id: string;
  assignee: string;
  workflow: string;
  score: number;
  author: string;
  createdAt: string;
  updatedAt: string;
  picture: string;
  constructor(){
    this.id    = '';
    this.assignee    = '';
    this.workflow    = '';
    this.score  = 0;
    this.author      = '';
    this.createdAt   = "";
    this.updatedAt = "";
    this.picture = "../../../assets/Angular ExamDesktopView.png"
   }
}