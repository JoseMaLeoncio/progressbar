import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SaludarComponent} from './componentes/saludar.component'
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './componentes/form/form.component';
import { AddAppComponent } from './componentes/add-app/add-app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludarComponent,
    FormComponent,
    AddAppComponent,
    PasswordStrengthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
