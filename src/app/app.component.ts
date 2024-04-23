import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getTask } from './services/get-task';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-test';
  task = getTask();
  ngOnInit(): void {
    console.log(this.task);
  }
}
