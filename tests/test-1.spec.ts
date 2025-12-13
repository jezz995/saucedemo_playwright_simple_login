import { test, expect } from "@playwright/test";

test("Login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  //fill username & password
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");

  // Click login button
  await page.locator("#login-button").waitFor({ state: "visible" });
  await page.locator("#login-button").click();

  // Assert user is logged in (URL check)
  await expect(page).toHaveURL(/inventory.html/);

  // Assert products page title is visible
  await expect(page.locator(".title")).toHaveText("Products");
});
