import { ColorService } from './../../services/color.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { HomeComponent } from './home/home.component';
import { TweetComponent } from './shared/tweet/tweet.component';
import { AvatorIconComponent } from './shared/avator-icon/avator-icon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { TweetInputComponent } from './shared/tweet-input/tweet-input.component';
import { TweetModalComponent } from './shared/tweet-modal/tweet-modal.component';
import { TweetService } from './services/tweet.service';
import { TerminalComponent } from './shared/terminal/terminal.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { CliSettingsComponent } from './home/cli-settings/cli-settings.component';
import { ContenteditableModule } from '@ng-stack/contenteditable';

@NgModule({
  declarations: [
    AppComponent,
    SideNavMenuComponent,
    HomeComponent,
    TweetComponent,
    AvatorIconComponent,
    SearchBarComponent,
    TweetInputComponent,
    TweetModalComponent,
    TerminalComponent,
    CliSettingsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ColorPickerModule,
    ContenteditableModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ])
  ],
  providers: [
    TweetService,
    ColorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
