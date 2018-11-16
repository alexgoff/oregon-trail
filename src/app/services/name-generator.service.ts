import { Injectable } from '@angular/core';
import { PREFIXES } from '../mock/prefixes';
import { NAMES } from '../mock/names';

const prefixes = PREFIXES;
const names = NAMES;

@Injectable({
  providedIn: 'root'
})
export class NameGeneratorService {

  constructor() { }

  public getPrefix = () => prefixes[this.getRand(0,prefixes.length)];

  public getName = () => names[this.getRand(0,names.length)];

  private getRand = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

}
