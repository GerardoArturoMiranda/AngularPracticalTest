import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Idea } from './models/api/idea.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url : string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3001';
  }

  getIdeas(auth_token: string): Observable<any> {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + auth_token);
    const method = 'api/ideas';
    return this.http.get<any>(`${this.url}/${method}`, { headers : headers_object }).pipe(
      map( resp => {
        return resp;
      })
    );
  }

  updateIdea(id: string, newAssignee: string, newWorkflow: string, newScore: number, newAuthor: string, newPic: string): Observable<any> {
    const method = 'api/ideas/' + id ;
    let request = {
      name: "",
      assignee: newAssignee,
      workflow: newWorkflow,
      score: newScore,
      author: newAuthor,
      picture: newPic
    }
    return this.http.put<any>(`${this.url}/${method}`, request).pipe(
      map( resp => {
        return resp;
      })
    );
  }

  delIdea(id: string): Observable<any> {
    const method = 'api/ideas/' + id ;
    return this.http.delete<any>(`${this.url}/${method}`).pipe(
      map( resp => {
        return resp;
      })
    );
  }
}
