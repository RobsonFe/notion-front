import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../service/pagination.service';
import { CommonModule } from '@angular/common';
import { NotionService } from '../../service/notion.service';
import { Tasks } from '../../types/tasks.types';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  tasks: Tasks[] = [];
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
      this.loadTasks();
    });
  }

  loadTasks(): void {
    this.taskService
      .findAll(this.currentPage, this.pageSize)
      .subscribe((response) => {
        this.tasks = response.result || [];
        this.totalPages = Math.ceil(response.count / this.pageSize);
      });
  }

  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages && page !== this.currentPage) {
      this.paginationService.setCurrentPage(page);
    }
  }
}
