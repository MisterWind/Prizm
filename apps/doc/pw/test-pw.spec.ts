import { test, expect } from '@playwright/test';
import { UtilPwConsole } from './util';
import { URLS_FOR_DEMO_CHECK } from './const';

test('consoleError', async ({ page }) => {
  const base = 'http://localhost:8080';
  for (const item of URLS_FOR_DEMO_CHECK) {
    await UtilPwConsole.getErrorsForPage(base, item, page);
  }

  expect(UtilPwConsole.commonLogs.length).toEqual(0);
});
