import { Injectable } from '@angular/core';
import { PREFIXES } from '../mock/prefixes';

const prefixes = PREFIXES;

@Injectable({
  providedIn: 'root'
})
export class NameGeneratorService {

  constructor() { }

  public getPrefix = () => prefixes[this.getRand(0,prefixes.length)];

  private getRand = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

}
