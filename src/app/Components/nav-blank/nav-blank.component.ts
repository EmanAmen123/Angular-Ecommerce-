import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthServiceService } from '../../Core/Services/auth-service.service';

@Component({
  selector: 'app-nav-blank',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent {
  private readonly _AuthServiceService=inject(AuthServiceService)
  logout(){
   this._AuthServiceService.logout()
  }
}
