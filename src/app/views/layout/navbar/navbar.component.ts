import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Sidebar toggle on hamburger button click
   */
  toggleSidebar(e: Event) {
    e.preventDefault();
    this.document.body.classList.toggle('sidebar-open');
  }

  /**
   * Logout
   */
  onLogout(e: Event) {
    e.preventDefault();
    localStorage.removeItem('isLoggedin');
      console.log('logging out');
    localStorage.removeItem('${AUTHENTICATED_USER}');
    localStorage.removeItem('${TOKEN}');
    sessionStorage.removeItem('${AUTHENTICATED_USER}');
    sessionStorage.removeItem('${TOKEN}');



    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/auth/login']);
    }
  }
//////////////////////////////////////////

  logout() {
    console.log('logging out');
    localStorage.removeItem('${AUTHENTICATED_USER}');
    localStorage.removeItem('${TOKEN}');
    sessionStorage.removeItem('${AUTHENTICATED_USER}');
    sessionStorage.removeItem('${TOKEN}');
  }


   userName = localStorage.getItem('${AUTHENTICATED_USER}')






}
