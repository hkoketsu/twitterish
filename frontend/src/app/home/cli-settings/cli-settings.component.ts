import { ColorService } from 'src/app/services/color.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cli-settings',
  templateUrl: './cli-settings.component.html',
  styleUrls: ['./cli-settings.component.css']
})
export class CliSettingsComponent implements OnInit {
  backgroundColor = '#000';
  textColor = '#fff';

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
  }

  onBackgroundColorChange(color: string): void {
    this.colorService.changeBackgroundColor(color);
  }

  onTextColorChange(color: string): void {
    this.colorService.changeTextColor(color);
  }
}
