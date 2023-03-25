import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RegisterClassFormComponent } from "./register-class-form/register-class-form.component";
import { ModalSendFormComponent } from "./modal-send-form/modal-send-form.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ItemCardComponent } from "./components/item-card/item-card.component";
import { RegisterUserFormComponent } from "./register-user-form/register-user-form.component";
import { FormsModule } from "@angular/forms";
import { SearchInputComponent } from "./search-input/search-input.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterClassFormComponent,
    ModalSendFormComponent,
    NavbarComponent,
    ItemCardComponent,
    RegisterUserFormComponent,
    SearchInputComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
