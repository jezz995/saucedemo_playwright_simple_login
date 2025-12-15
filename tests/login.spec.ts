import { test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test("SLG-001-Login sukses dengan user valid", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.assertLoginSuccess();
});

test("SLG-002-login gagal dengan invalid password", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_saos");
  await loginPage.assertLoginFailed();
});

test("SLG-003-login gagal dengan invalid username", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("standard_us", "secret_sauce");
  await loginPage.assertLoginFailed();
});

test("SLG-004-login gagal dengan username kosong", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("", "secret_sauce");
  await loginPage.assertLoginFailed();
});

test("SLG-005-Login gagal dengan password kosong ", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "");
  await loginPage.assertLoginFailed();
});
