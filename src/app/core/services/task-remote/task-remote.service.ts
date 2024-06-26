import { Injectable } from '@angular/core';
import { ITaskService, Task } from '../../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskRemoteService implements ITaskService {
  getTask(id: number): Task {
    console.log('從後端服務取得資料');
    return {
      id: 321,
      title: 'TaskRemoteService'
    }
  }

  getTasks(): Task[] {
    console.log('從後端服務取得資料');
    return [];
  }
}
