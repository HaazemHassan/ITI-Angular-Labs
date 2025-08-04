import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-component',
  imports: [ReactiveFormsModule],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css',
})
export class SearchComponentComponent implements OnInit, OnDestroy {
  searchInputControl = new FormControl('');
  @Output() searchInputChange = new EventEmitter<string>();
  private subscription: Subscription | undefined;

  ngOnInit() {
    this.subscription = this.searchInputControl.valueChanges
      .pipe(debounceTime(400))
      .subscribe((value) => {
        this.searchInputChange.emit(value ?? '');
      });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
