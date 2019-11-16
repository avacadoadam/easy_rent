import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, of, pipe, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  secondOuput: any;
  @ViewChild('inputField') inputField;
  stringVar = new Subject<string>();
  stringVar$ = this.stringVar.asObservable();
  clicked: boolean;

  constructor() {
    // ------ Creating the observable ----------
    // Create a subject - The thing that will be watched by the observable
    this.secondOuput = 'a';
    this.stringVar$.pipe(
      filter(data => data === 'aa')
    ).subscribe(data => {
      this.secondOuput = data;
  });

  }

  ngOnInit() {
  }

  doneInput() {

    this.stringVar.next(this.inputField.nativeElement.value);
  }
}
