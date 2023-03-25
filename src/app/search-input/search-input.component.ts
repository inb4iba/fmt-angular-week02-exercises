import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.scss"],
})
export class SearchInputComponent {
  input = "";
  @Output() searchInput: EventEmitter<string> = new EventEmitter();

  inputChange() {
    this.searchInput.emit(this.input);
  }
}
