import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Injectable()
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: '第一個',
    },
    {
      id: 2,
      title: '第二個',
    },
    {
      id: 3,
      title: '第三個',
    },
  ];

  /**get 單筆task */
  getTask(id: number): Task {
    return this.tasks.find((task) => task.id === id)!;
  }
  /**get 全部task */
  getTasks(): Task[] {
    return this.tasks;
  }

  /**set title */
  setTitle(id: number, title: string): void {
    const task = this.tasks.find((task) => task.id === id)!;
    task.title = title;
  }
}
