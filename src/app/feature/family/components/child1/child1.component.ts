import { Component, inject } from '@angular/core';
import { TaskService } from '../../../../core/services/task.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
})
export class Child1Component {
  private taskService = inject(TaskService);
  ngOnInit(): void {
    console.log(this.taskService.getTask());
  }
  constructor() {}
}
