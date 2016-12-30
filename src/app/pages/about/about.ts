import { Component, ViewChild } from '@angular/core';
import { MdMenuTrigger } from '@angular/material';

@Component({
  selector: 'about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About {
  jobs = [
    { value: 'java', viewValue: 'Java工程师' },
    { value: 'view', viewValue: '前端工程师' }, 
    { value: 'android', viewValue: 'Android工程师' }
  ];
}