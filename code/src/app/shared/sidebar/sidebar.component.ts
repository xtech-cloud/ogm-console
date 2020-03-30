import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES, TEMPLATE_ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment'

declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: any[];

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  // End open close
  ngOnInit() {
      let routes = ROUTES;
      if (!environment.production) {
          routes = ROUTES.concat(TEMPLATE_ROUTES)
      }
    this.sidebarnavItems = routes.filter(sidebarnavItem => sidebarnavItem);
    $(function() {
      $('.sidebartoggler').on('click', function() {
        if ($('#main-wrapper').hasClass('mini-sidebar')) {
          $('body').trigger('resize');
          $('#main-wrapper').removeClass('mini-sidebar');
        } else {
          $('body').trigger('resize');
          $('#main-wrapper').addClass('mini-sidebar');
        }
      });
    });
  }
}
