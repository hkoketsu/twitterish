import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TweetModalComponent } from '../shared/tweet-modal/tweet-modal.component';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.css']
})
export class SideNavMenuComponent {
  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(TweetModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  openTerminal() {
    console.log('open terminal');
  }
}

