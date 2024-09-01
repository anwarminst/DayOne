import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactComponent, AboutComponent, ProductComponent, NavbarComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DayOne';
}
