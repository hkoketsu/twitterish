import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TweetModalComponent } from '../shared/tweet-modal/tweet-modal.component';
import { TerminalService } from '../services/terminal.service';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.css']
})
export class SideNavMenuComponent implements OnInit {
  terminalOn = false;

  constructor(private modalService: NgbModal, private terminalService: TerminalService) {}

  ngOnInit() {
    this.terminalService.terminalOn.subscribe(
      value => this.terminalOn = value
    );
  }

  openModal() {
    const modalRef = this.modalService.open(TweetModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  openTerminal() {
    console.log('open terminal');
    this.terminalService.openTerminal(!this.terminalOn);
  }
}

