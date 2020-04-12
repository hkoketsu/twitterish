import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tweet-modal',
  templateUrl: './tweet-modal.component.html',
  styleUrls: ['./tweet-modal.component.css']
})
export class TweetModalComponent {
  @Input() name: string;

  constructor(public activeModal: NgbActiveModal) {}
}