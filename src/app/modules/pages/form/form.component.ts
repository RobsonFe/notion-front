import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../../home/home.component';
import { RouterLink } from '@angular/router';
import { NotionService } from '../../service/notion.service';
import { CreateTasks } from '../../types/create.tyes';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, HomeComponent, RouterLink, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  newTask: CreateTasks = {
    title: '',
    status: '',
    priority: '',
  };
  success: boolean = false;
  erro: boolean = false;

  constructor(private taskService: NotionService) {}
  ngOnInit(): void {}

  criarBook(): void {
    console.log(this.newTask);
    this.taskService.create(this.newTask).subscribe(
      (response) => {
        console.log('Nova tarefa criada com sucesso:', response);
        this.success = true;
        this.limpar();
        setTimeout(() => {
          this.success = false;
        }, 5000);
      },
      (error) => {
        console.error(`Erro ao cadastrar tarefa: ${error}`);
        this.erro = true;
        setTimeout(() => {
          this.erro = false;
        }, 5000);
      }
    );
  }

  limpar() {
    this.newTask = {
      title: '',
      status: '',
      priority: '',
    };
  }
}
