import { InjectionToken } from "@angular/core";

export const englishTranslations = {
  'hello': 'Hello'
};

export const chineseTranslations = {
  'hello': '你好'
};

// 定義一個用於翻譯的 InjectionToken
export const TRANSLATIONS = new InjectionToken('translations');
