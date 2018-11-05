import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'ot-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  @Input() activeTheme;
  @Input() themes;

  @Output() changeTheme: EventEmitter<string[]> = new EventEmitter<string[]>();

  dropdownVisible = false;
  
  constructor() { }

  ngOnInit() {
  }

  // control the state of the dropdown
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  // on click inside, stop propagation
  clickInside($event: Event){
    $event.preventDefault();
    $event.stopPropagation();  // <- that will stop propagation on lower layers
  }

  // have a listener for if click outside dropdown
  @HostListener('document:click', ['$event']) clickedOutside($event){
    if(this.dropdownVisible){
      this.dropdownVisible = false;
    }
  }

  // emit the new theme
  setTheme(theme) {
    this.changeTheme.emit(theme);
  }

}
