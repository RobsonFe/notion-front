import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tasks } from '../../types/tasks.types';
import { NotionService } from '../../service/notion.service';
import { PaginationService } from '../../service/pagination.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    ModalComponent,
    PaginationComponent,
    FormsModule,
    RouterLink,
    HomeComponent,
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
})
export class TablesComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  tasks: Tasks[] = [];
  tasksDetails: Tasks | null = null;
  tasksToUpdate: Tasks = {
    _id: '',
    title: '',
    status: '',
    priority: '',
  };
  tasksToDelete: Tasks | null = null;
  isEditModalOpen: boolean = false;
  isDeleteModalOpen: boolean = false;
  success: boolean = false;
  deletou: boolean = false;
  error: string = '';

  constructor(
    private tasksService: NotionService,
    private paginationService: PaginationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.paginationService.currentPage$.subscribe((page) => {
        this.listTasks(page, 10);
      })
    );

    this.subscriptions.push(
      this.route.paramMap.subscribe((params) => {
        const id = params.get('id');
        if (id) {
          this.loadTasksDetails(id);
        }
      })
    );
  }

  listTasks(page: number, pageSize: number): void {
    this.tasksService.findAll(page, pageSize).subscribe((response: any) => {
      this.tasks = response.result || [];
    });
  }

  loadTasksDetails(id: string): void {
    this.tasksService.find(id).subscribe((details: Tasks) => {
      this.tasksDetails = details;
      this.tasksToUpdate = { ...details };
    });
  }

  updateTask(): void {
    console.log('Método updateTasks chamado');
    console.log('ID da Task a ser atualizado:', this.tasksToUpdate._id);
    console.log('Dados da Tasks a ser atualizado:', this.tasksToUpdate);
    if (this.tasksToUpdate._id) {
      console.log('Atualizando livro com:', this.tasksToUpdate);
      this.tasksService
        .update(this.tasksToUpdate._id, this.tasksToUpdate)
        .subscribe(
          (response) => {
            console.log('Resposta da atualização:', response);
            this.success = true;
            this.listTasks(1, 10);
            this.loadTasksDetails(this.tasksToUpdate._id);
            this.closeEditModal();
            setTimeout(() => (this.success = false), 3000);
          },
          (error) => {
            this.error = 'Erro ao atualizar o livro';
            console.error('Erro ao atualizar o livro:', error);
          }
        );
    }
  }

  confirmDelete(): void {
    console.log('Tarefa a ser removida:', this.tasksToDelete);
    if (this.tasksToDelete && this.tasksToDelete._id) {
      this.tasksService.delete(this.tasksToDelete._id).subscribe(
        () => {
          this.deletou = true;
          console.log('Tarefa removida com sucesso!');
          this.listTasks(1, 10); // Recarregar a lista após remoção
          this.closeDeleteModal();
          setTimeout(() => (this.deletou = false), 3000);
        },
        (error) => {
          this.error = 'Erro ao remover a tarefa';
          console.error('Erro ao remover a tarefa:', error);
        }
      );
    } else {
      console.error('ID da tarefa é inválido ou não definido');
    }
  }

  openEditModal(tasks: Tasks): void {
    this.tasksToUpdate = { ...tasks };
    this.isEditModalOpen = true;
  }

  closeEditModal(): void {
    this.isEditModalOpen = false;
  }

  openDeleteModal(tasks: Tasks): void {
    this.tasksToDelete = { ...tasks };
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
