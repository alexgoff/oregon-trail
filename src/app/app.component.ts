import { Component, OnInit } from '@angular/core';
import * as figlet from 'figlet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'oregon-trail';
  // testString = ascii.font('test');

  ngOnInit () {
    figlet('Hello World!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      console.log(data)
  });    
  }
}
