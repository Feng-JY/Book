import { Component } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  isDarkTheme: boolean = false;

  isShowBackTop() {
    return true; 
  }

  backTop() {
    window.scrollTo(0, 0);
  }
}