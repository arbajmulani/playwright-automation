import { test, expect } from '../tests/baseTest.js';
import { LoginPage } from '../pages/LoginPage.js';
import { envLoginData } from '../utils/testData.js';

// test('[@smoke] Valid login with ENV credentials', async ({ page }) => {
//   const loginPage = new LoginPage(page);

//   await loginPage.navigate();
//   await loginPage.login(
//     envLoginData.username,
//     envLoginData.password
//   );

//   const message = await loginPage.getFlashMessage();
//   expect(message).toContain(envLoginData.successMessage);
// });
