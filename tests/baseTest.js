import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use, testInfo) => {

    await use(page);

    if (testInfo.status !== testInfo.expectedStatus) {
      console.log(`❌ Test failed: ${testInfo.title}`);
    }
  }
});

export { expect };
