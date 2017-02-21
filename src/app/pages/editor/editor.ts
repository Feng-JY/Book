import { Component } from '@angular/core';
import * as _ from 'lodash';

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

  code: string;
  language: string = 'javascript';

  // Set Monaco Editor Options
  monaco_options: any = {
    lineNumbers: true,
    roundedSelection: false,
    scrollBeyondLastLine: false,
    wrappingColumn: -1,
    folding: false,
    renderLineHighlight: true,
    overviewRulerLanes: 0,
    theme: "vs-dark",
    customPreventCarriageReturn: true,
    scrollbar: {
      vertical: 'hidden',
      horizontal: 'auto',
      useShadows: false
    }
  }

  ngAfterViewInit() {
    this.code = `  
     /**
      * init data
      */
      object = {
        'type': 'json',
        'people': {
          'name': '张三',
          'address': '北京西直门',
          'company': 'XXX公司'
        }
      }`;
  }

}