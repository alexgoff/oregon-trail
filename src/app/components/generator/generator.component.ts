import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'ot-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  originalName: string;
  trailName: string;
  typed: Typed;

  target = "#trailName";

  options = {
    strings: [],
    typeSpeed: 125
  }


  constructor() {

   }

  ngOnInit() {
    this.typed = new Typed(this.target, this.options);
    this.typed.destroy();
  }

  typeName(name) {
    this.typed.destroy();

    this.options.strings = [];
    this.options.strings.push(name);

    this.typed = new Typed(this.target, this.options);

    // need to preserve existing names and append new ones
  }

  generateName(name: string) {

    // generate a name

    this.typeName(name);
  }

}
