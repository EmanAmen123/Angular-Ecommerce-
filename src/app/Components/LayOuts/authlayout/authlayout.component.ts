import { Component } from '@angular/core';
import { NavAuthComponent } from "../../nav-auth/nav-auth.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-authlayout',
  imports: [NavAuthComponent,RouterOutlet,FooterComponent],
  templateUrl: './authlayout.component.html',
  styleUrl: './authlayout.component.scss'
})
export class AuthlayoutComponent {

}
