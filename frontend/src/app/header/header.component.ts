import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Movie Frenzy';
  isNavbarCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
