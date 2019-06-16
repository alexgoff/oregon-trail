import { Component, OnInit } from '@angular/core';
import { NameGeneratorService } from '../../services/name-generator.service';
import Typed from 'typed.js';
import { CONFIG } from '../../config/config';

@Component({
  selector: 'ot-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  originalName: string;
  typed: Typed;

  storedNames: string[] = [];

  target = "#trailName";

  options = {
    strings: [],
    typeSpeed: 80
  }


  constructor(private _nameService: NameGeneratorService) {

  }

  ngOnInit() {
    this.typed = new Typed(this.target, this.options);
    this.typed.destroy();
  }

  typeName(name) {

    // if there is already a name that exists, put that name in the store names array
    // type the new name

    if(this.options.strings.length) {
      this.storedNames.push(this.options.strings[0]);
    }

    // destroy the currently typed name
    this.typed.destroy();

    this.options.strings = [];
    this.options.strings.push(name);

    this.typed = new Typed(this.target, this.options);
  }

  generateName(name: string) {
    let alliteration = (Math.random() < CONFIG.ALLITERATION_PROBABILITY) ? true : false;

    // if no name has been entered, get one from the base names list
    if(name === undefined || name.trim().length === 0) {
      name = this._nameService.getName();
    }

    let prefix = this._nameService.getPrefix(alliteration,name[0]);

    // let prefix = this._nameService.getPrefix();
    let fullName = `${prefix} ${name}`;

    this.typeName(fullName);
  }

}
