import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 @Output() openDialog = new EventEmitter<any>();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    
    if (!target.closest('.menu-container')) {
      this.menuOpen = false;
    }
  }
  createUser(){
    let data:any={};
    data.isAction='create';
    this.openDialog.emit(data);
  }
  changePassword(){
    let data:any={};
    data.isAction='changePassword';
    this.openDialog.emit(data);
  }
  signOut(){
    this.router.navigate(['/pre-auth/landingpage/login']);
  }

}
