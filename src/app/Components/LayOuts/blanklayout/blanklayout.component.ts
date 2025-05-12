import { Component } from '@angular/core';
import { NavBlankComponent } from "../../nav-blank/nav-blank.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-blanklayout',
  imports: [NavBlankComponent,RouterOutlet,FooterComponent],
  templateUrl: './blanklayout.component.html',
  styleUrl: './blanklayout.component.scss'
})
export class BlanklayoutComponent {

}
