import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BackendService, User, Task } from '../backend.service';

@Component({
  selector: 'app-list-screen',
  templateUrl: './list-screen.component.html',
  styleUrls: ['./list-screen.component.css']
})
export class ListScreenComponent implements OnInit {

  tasklist: Task[];
  UserList: User[];
  tasks: any;
  users: any;
  taskname: "";
  searchKey: string = "";
  constructor(private service: BackendService, private router: Router) { }

  ngOnInit(): void {
    this.fetchTasks();
    this.fetchUsers();
    this.service.search.subscribe((val: any) => { this.searchKey = val });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {

      }
    })
  }

  fetchTasks() {
    this.service.tasks().subscribe(
      response => {
        this.tasks = response;
        console.log(this.tasks);
      })

  }
  fetchUsers() {
    this.service.users().subscribe(
      response => {this.users=response}
    );
  }
  addTask(task: string) {
    console.log(task);
    this.service.newTask(task).subscribe(res => { this.fetchTasks() })
  }
  TaskDetails(id) {
    this.router.navigate(['/details/' + id]);
  }
  Assign(taskid, assigneeId) {
    this.service.assign(taskid, assigneeId).subscribe(res => { this.fetchTasks() })
  }
  Complete(id: number, complete: boolean) {
    this.service.complete(id, complete).subscribe(res => { this.fetchTasks() })
  }
}
