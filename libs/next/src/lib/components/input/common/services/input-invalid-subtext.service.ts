import { Injectable } from '@angular/core';

/**
 * Default class for input validation texts
 */
@Injectable()
export class ZuiInputValidationTexts {
  private readonly invalidTextMap = new Map<string, string>([
    ['required', 'Обязательное поле'],
    ['min', 'Значение слишком маленькое'],
    ['max', 'Значение слишком большое'],
  ]);

  public getText(key: string): string | undefined {
    return this.invalidTextMap.get(key);
  }
}
