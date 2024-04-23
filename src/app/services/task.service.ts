import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): string{
    return '叫我幹嘛';
  }
  
}
