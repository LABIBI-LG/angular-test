import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Injectable()
export class TaskJsonService {
  getTask(id: number): Task {
    console.log('從 JSON 取得資料');
    return {
      id: 99,
      title: '',
    };
  }

  getTasks(): Task[] {
    console.log('從 JSON 取得資料');
    return [];
  }
}
