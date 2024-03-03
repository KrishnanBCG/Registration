import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { Angular } from './material-module';
import { LoginComponent } from './Login/login.component';
import {
  IgxIconModule,
  IgxTabsModule,
  IgxCardModule,
  IgxAvatarModule,
  IgxButtonModule,
  IgxRippleModule
} from "igniteui-angular";
import { RegisterComponent } from './Register/app.component';
import { FormsModule } from '@angular/forms';

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule, MatIconModule, AppRoutingModule, IgxIconModule,
    IgxTabsModule,
    
    IgxCardModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    Angular

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
