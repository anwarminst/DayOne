import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navInput:string = '';
  public navbar: any[] = [
    {
      name: "home",
      isActive: true
    },
    {
      name: "about",
      isActive: false
    },
    {
      name: "contact",
      isActive: false
    },
    {
      name: "Dashboard",
      isActive: false
    }
  ];

  addNavbar(nav:string){
    this.navbar.push({name: this.navInput, isActive: false});
  }
  OnInputChange(event:any){
    this.navInput = event;
  }
  remove(index:any){
    let curentIndex = this.navbar.findIndex((item)=>{
      return item.name == index.name
    })
    this.navbar.splice(curentIndex, 1);

  }

}
