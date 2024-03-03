import { Component } from '@angular/core';
import {
  IgxIconModule,
  IgxTabsModule,
  IgxCardModule,
  IgxAvatarModule,
  IgxButtonModule,
  IgxRippleModule
} from "igniteui-angular";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  standalone:true,
  imports: [IgxIconModule, IgxTabsModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule],
})
export class RegisterPageComponent {
  isActive=true;
}
