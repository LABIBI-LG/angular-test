import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpContext,
} from '@angular/common/http';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { Observable, interval } from 'rxjs';
import { Task } from './core/interfaces/task.interface';
import { useAuthHenfer } from './core/interceptors/auth.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: 'LoadingPath', useValue: 'assets/loading.gif' }],
})
export class AppComponent {
  title = 'angular-test';
  private http = inject(HttpClient);
  private readonly url = '/assets/task.json';
  private readonly destroyRef = inject(DestroyRef);
  // public loadingPath: string = inject('LoadingPath');

  tasks$!: Observable<Task[]>;
  ngOnInit(): void {
    this.getTasks().subscribe();
  }

  getTasks(): Observable<Task[]> {
    const context = new HttpContext().set(useAuthHenfer, true);
    return this.http.get<Task[]>(this.url, { context });
  }
}
