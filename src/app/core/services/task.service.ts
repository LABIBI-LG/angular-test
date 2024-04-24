import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  constructor() { }

  getTask(): string{
    return '叫我幹嘛';
  }

}
