import { Routes } from '@angular/router';
import { TablesComponent } from './modules/components/tables/tables.component';
import { FormComponent } from './modules/pages/form/form.component';
import { GreetingsComponent } from './modules/pages/greetings/greetings.component';

export const routes: Routes = [
  { path: '', component: GreetingsComponent },
  { path: 'greetings', component: GreetingsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'tables/:id', component: TablesComponent },
  { path: 'create', component: FormComponent },
];
