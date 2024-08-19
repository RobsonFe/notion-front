import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../service/pagination.service';
import { CommonModule } from '@angular/common';

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
  pageSize: number = 5;

  constructor(private paginationService: PaginationService) {}

  ngOnInit(): void {
    this.paginationService.currentPage$.subscribe((page) => {
      this.currentPage = page;
      // this.listarBooks(page, this.pageSize);
    });
  }

  // listarBooks(page: number, pageSize: number): void {
  //   this.bookService.listar(page - 1, pageSize).subscribe((response: any) => {
  //     this.books = response.content || [];
  //     this.totalPages = response.totalPages;
  //   });
  // }

  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages && page !== this.currentPage) {
      this.paginationService.setCurrentPage(page);
    }
  }
}
