import { Component, inject } from '@angular/core';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [Child1Component, Child2Component],
  templateUrl: './family.component.html',
  styleUrl: './family.component.scss',
  providers: [TaskService],
})
export class FamilyComponent {
  private taskService = inject(TaskService);
}
