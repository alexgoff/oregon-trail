import { Injectable } from '@angular/core';
import { PREFIXES } from '../mock/prefixes';
import { NAMES } from '../mock/names';
import { CONFIG } from '../config/config';

const prefixes = PREFIXES;
const names = NAMES;

@Injectable({
  providedIn: 'root'
})
export class NameGeneratorService {

  constructor() { }

  public getPrefix = (alliteration, first) => {
    let prefix;

    // if this is an alliteration, get prefixes until it matches the first character
    if (alliteration) {
      do {
        prefix = prefixes[this.getRand(0, prefixes.length)]
      }
      while (prefix[0] !== first);
    } else {
      prefix = prefixes[this.getRand(0, prefixes.length)]
    }

    return prefix
  };

  public getSuffix() {
    return 'Last Name'
  };

  public getPostfix() {
    return 'Jr.'
  };

  public getName = () => names[this.getRand(0, names.length)];

  private getRand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

}
