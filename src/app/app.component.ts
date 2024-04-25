const taskSpyService = {
  getTask: () => {
    console.log('這是一個假服務');
    return {
      id: 123,
      title: 'error',
    };
  },
  getTasks: () => {
    console.log('這是一個假服務');
    return [];
  },
};

import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './core/services/task/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TaskService, useValue: taskSpyService }],
})
export class AppComponent {
  title = 'angular-test';
  taskService = inject(TaskService);

  ngOnInit(): void {
    console.log(this.taskService.getTask(1));
    console.log(this.taskService.getTasks());
  }
}
