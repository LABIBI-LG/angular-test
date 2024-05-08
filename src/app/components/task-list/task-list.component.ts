import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { ConfirmMessageToken } from '../../core/services/confirm-message.task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  providers: [{
    provide: ConfirmMessageToken,
    useValue: '(task-list)'
  }]
})
export class TaskListComponent {

}
