import { Component } from '@angular/core';

@Component({
  selector: 'editor',
  styleUrls: ['./editor.scss'],
  templateUrl: './editor.html'
})
export class Editor {

  editorValue: Object = {
    'type': 'json',
    'people': {
        'name': '张三',
        'address': '北京西直门',
        'company': 'XXX公司'
    }
  };

}