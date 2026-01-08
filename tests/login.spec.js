import { test, expect } from '../tests/baseTest.js';
import { LoginPage } from '../pages/LoginPage.js';
import { loginData as loginJsonData } from '../utils/testData.js';
import { getExcelData } from '../utils/excelReader.js';


/* ================= SMOKE TEST (JSON) ================= */

test('[@smoke] Login Test With Json', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login(
    loginJsonData.validLogin.username,
    loginJsonData.validLogin.password
  );

  const message = await loginPage.getFlashMessage();
  expect(message).toContain(loginJsonData.validLogin.successMessage);
});

/* ================= REGRESSION TESTS (EXCEL) ================= */

const loginExcelData = getExcelData('Sheet1');

for (const data of loginExcelData) {
  test(`[@regression] Login test with Excel`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(data.Username, data.Password);

    const message = await loginPage.getFlashMessage();
    expect(message).toContain(data.ExpectedMessage);
  });
}
