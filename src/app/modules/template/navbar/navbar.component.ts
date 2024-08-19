import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../service/flowbite.service';
import { ToggleComponent } from '../../components/toggle/toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
