import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../service/pagination.service';
import { CommonModule } from '@angular/common';
import { NotionService } from '../../service/notion.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  tasks: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 10;

  constructor(
    private paginationService: PaginationService,
    private taskService: NotionService
  ) {}

  ngOnInit(): void {
    this.paginationService.currentPage$.subscribe((page) => {
      this.currentPage = page;
      this.taskService.findAll(page, this.pageSize);
    });
  }

  listTasks(page: number, pageSize: number): void {
    this.taskService.findAll(page - 1, pageSize).subscribe((response: any) => {
      this.tasks = response.content || [];
      this.totalPages = response.totalPages;
    });
  }

  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages && page !== this.currentPage) {
      this.paginationService.setCurrentPage(page);
    }
  }
}
