import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  getCurrentLocale(): string {
    // 假設默認語言是英語
    return 'zh';
  }
}
