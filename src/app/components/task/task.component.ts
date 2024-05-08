import { Component, Inject, Optional, Self, SkipSelf, inject } from '@angular/core';
import { ConfirmMessageToken } from '../../core/services/confirm-message.task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',

})
export class TaskComponent {
  // constructor(
  //   @Optional() @Inject(ConfirmMessageToken) private confirmMessage: string
  // ) {}
  private confirmMessage = inject(ConfirmMessageToken, { host: true ,optional: true});
  ngOnInit(): void {
    console.log(this.confirmMessage);
  }
}
