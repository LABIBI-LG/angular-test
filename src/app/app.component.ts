import { Component, InjectionToken, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskServiceToken } from './core/interfaces/task.interface';
import { LocaleService } from './core/services/locale/locale.service';
import {
  TRANSLATIONS,
  chineseTranslations,
  englishTranslations,
} from './core/constants/translations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: 'LoadingPath', useValue: 'assets/loading.gif' }],
})
export class AppComponent {
  title = 'angular-test';
  // public loadingPath: string = inject('LoadingPath');

  ngOnInit(): void {
    // console.log(this.loadingPath);
  }
}
