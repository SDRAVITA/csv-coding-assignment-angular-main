import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchTerm !:string;
  constructor(private service:BackendService) { }

  ngOnInit(): void {
  }
  search(event:any){
    this.searchTerm=event.target.value;
    this.service.search.next(this.searchTerm);
  }

}
