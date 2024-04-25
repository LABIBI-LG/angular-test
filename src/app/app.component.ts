import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './core/services/task/task.service';
import { TaskRemoteService } from './core/services/task-remote/task-remote.service';
import { TaskJsonService } from './core/services/task-json/task-json.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: TaskService,
      useFactory: () => {
      const httpClient = inject(HttpClient);
      ...
      }
    }
  ],
})
export class AppComponent {
  title = 'angular-test';
  taskService = inject(TaskService);

  ngOnInit(): void {
    console.log(this.taskService.getTask(1));
    console.log(this.taskService.getTasks());
  }
}
