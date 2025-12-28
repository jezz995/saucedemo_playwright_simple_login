import { Page, Locator, expect } from "@playwright/test";

export class CheckoutFinishPage {
  readonly page: Page;
  readonly finishButton: Locator;
  readonly cancelButton: Locator;
  readonly finishMessage: Locator;
  readonly backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.finishButton = page.locator('button:has-text("Finish")');
    this.cancelButton = page.locator('button:has-text("Cancel")');
    this.finishMessage = page.locator(':text("Checkout: Complete!")');
    this.backHomeButton = page.locator('button[name="back-to-products"]');
  }

  async clickFinish() {
    await this.finishButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }

  async assertFinishMessage() {
    await expect(this.finishMessage).toBeVisible();
  }

  async clickBackHome() {
    await this.backHomeButton.click();
  }
}
