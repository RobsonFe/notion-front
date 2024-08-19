import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AppModule } from './modules/module/app.module';
import { FlowbiteService } from './modules/service/flowbite.service';
import { NotionService } from './modules/service/notion.service';
import { PaginationService } from './modules/service/pagination.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FlowbiteService, NotionService, PaginationService],
})
export class AppComponent {
  title = 'notion-spa';

  ngOnInit(): void {
    initFlowbite();
  }
}
