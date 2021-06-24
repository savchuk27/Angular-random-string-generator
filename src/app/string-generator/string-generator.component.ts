import { ChangeDetectorRef, Component, OnInit, AfterViewChecked } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-string-generator',
  templateUrl: './string-generator.component.html',
  styleUrls: ['./string-generator.component.css']
})
export class StringGeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source = interval(3000)
    const subscribe = source.subscribe();
  }

  randomStringGenerator(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result)
    return result;
  }

}
