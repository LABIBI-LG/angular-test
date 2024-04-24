import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getTask } from './core/services/get-task';
import { TaskService } from './core/services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  
  title = 'angular-test';
  // task = getTask();
  ngOnInit(): void {}
}
