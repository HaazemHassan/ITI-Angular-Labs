import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  input,
  Input,
  OnDestroy,
  OnInit,
  output,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { UserInterface, UserService } from '../../services/user-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule,RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit, OnDestroy {
  public counter: number = 0;
  private intervalId: any;

  // @Input({ required: true }) userNameInput: string = 'No User Name Provided';
  // @Input() bioInput: string = 'No Bio';
  // @Output() onUserRemoved = new EventEmitter();

  // Input Signal
  userId= input.required<number>();
  userNameInput = input<string>("Not Found");
  bioInput = input<string>('No Bio');
  // Output Signal
  onUserRemoved = output<string>();

  @ViewChild('userNameContainer') userNameContainer!: ElementRef;

  constructor() {
    // console.log('Constructor..');
  }

  ngOnChanges(): void {
    // Works only when there's INPUT
    // console.log('On Changes');
    // Handle Input Change
    // alert("User Name")
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // Api Call
    // console.log('On Init');

    // this.intervalId = setInterval(() => {
    //   this.counter++;
    //   console.log(this.counter);
    // }, 1000);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log('After View Init');
    // console.log(this.userNameContainer);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // console.log('On Destory');
    // if (this.intervalId) {
    //   clearInterval(this.intervalId);
    // }
    // Intervals
    // Api Call
    // Async
    // Obersavables Sub
  }

  onBtnClick(): void {
    



  }
}
