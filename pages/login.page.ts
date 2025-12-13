import { Page, Locator, expect } from "@playwright/test";

//class buat locator di login page
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.errorMessage = page.locator(".error-message-container");
  }
  //method tunggu sampe halaman login ke load
  async goto() {
    await this.page.goto("https://www.saucedemo.com/", {
      waitUntil: "domcontentloaded",
    });
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoginSuccess() {
    await expect(this.page).toHaveURL(/inventory.html/);
  }

  async assertLoginFailed() {
    await expect(this.errorMessage).toBeVisible();
  }
}
