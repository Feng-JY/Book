import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'lodash',
  styleUrls: ['./lodash.scss'],
  templateUrl: './lodash.html'
})

export class Lodash {
  

  chunk() {
    let _array = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log('array',_array);
    console.log('chunk', _.chain(_array).chunk(2).value());
    console.log('chunk', _.chain(_array).chunk(3).value());   
  }

  compact() {
    let _array = [ 1, false, 2 , null, '', 0, [], undefined, 3, NaN, 4 ];
    console.log('array',_array);
    console.log('compact',_.chain(_array).compact().value());
  }

}