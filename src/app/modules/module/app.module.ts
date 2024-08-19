import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../template/navbar/navbar.component';
import { ToggleComponent } from '../components/toggle/toggle.component';
import { FooterComponent } from '../template/footer/footer.component';
import { GreetingsComponent } from '../pages/greetings/greetings.component';
import { FormComponent } from '../pages/form/form.component';
import { TablesComponent } from '../components/tables/tables.component';
import { PaginationComponent } from '../components/pagination/pagination.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    ToggleComponent,
    FooterComponent,
    GreetingsComponent,
    FormComponent,
    TablesComponent,
    PaginationComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    GreetingsComponent,
    ToggleComponent,
    FormComponent,
    TablesComponent,
    PaginationComponent,
  ],
})
export class AppModule {}
