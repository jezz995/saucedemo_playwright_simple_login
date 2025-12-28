import { test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test.describe("Test Fungsi Login", () => {
  let loginPage: LoginPage;
  //sebelum semua test di mulai ,buat instance login page dan buka halaman login
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("SL-LGN-001-Login sukses dengan user valid", async ({ page }) => {
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.assertLoginSuccess();
  });

  test("SL-LGN-002-login gagal dengan invalid password", async ({ page }) => {
    await loginPage.login("standard_user", "secret_saos");
    await loginPage.assertLoginFailed();
  });

  test("SL-LGN-003-login gagal dengan invalid username", async ({ page }) => {
    await loginPage.login("standard_us", "secret_sauce");
    await loginPage.assertLoginFailed();
  });

  test("SL-LGN-004-login gagal dengan username kosong", async ({ page }) => {
    await loginPage.login("", "secret_sauce");
    await loginPage.assertLoginFailed();
  });

  test("SL-LGN-005-Login gagal dengan password kosong ", async ({ page }) => {
    await loginPage.login("standard_user", "");
    await loginPage.assertLoginFailed();
  });
});
