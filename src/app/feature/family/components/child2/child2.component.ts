import { Component, inject } from '@angular/core';
import { TaskService } from '../../../../core/services/task.service';


@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component {
  private taskService = inject(TaskService);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.taskService.getTask());
  }
}
