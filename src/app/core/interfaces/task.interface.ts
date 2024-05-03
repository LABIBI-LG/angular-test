import { InjectionToken } from '@angular/core';

export interface Task {
  id: number;
  title: string;
}

export interface ITaskService {
  getTask(id: number): Task;
  getTasks(): Task[];
}

export const TaskServiceToken = new InjectionToken<ITaskService>(
  'Task Service'
);
