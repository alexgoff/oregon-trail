import { Component } from '@angular/core';
// import { Themes } from './config/themes';
// import * as figlet from 'figlet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  themes = [
    'amber',
    'light-amber',
    'green-1',
    'green-2',
    'green-3',
    'appleII',
    'appleIIc'
  ];

  activeTheme = 'appleII'

  changeTheme(theme) {
    this.activeTheme = theme;
  }
}
