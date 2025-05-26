import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: false,
})
export class SearchBarComponent {
  city: string = '';

  @Output() searchCity = new EventEmitter<string>();

  onSearch() {
    if (this.city.trim()) {
      this.searchCity.emit(this.city.trim());
    }
  }
}
