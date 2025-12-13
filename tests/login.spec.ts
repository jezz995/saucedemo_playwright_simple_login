import { test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test("Login sukses dengan user valid", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.assertLoginSuccess();
});

test("login gagal dengan invalid password", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_saos");
  await loginPage.assertLoginFailed();
});

test("login gagal dengan invalid username", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("standard_us", "secret_sauce");
  await loginPage.assertLoginFailed();
});
