import { Page, Locator, expect } from "@playwright/test";

export class CheckoutInfoPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("#first-name");
    this.lastNameInput = page.locator("#last-name");
    this.postalCodeInput = page.locator("#postal-code");
    this.continueButton = page.locator("#continue:visible");
    this.cancelButton = page.locator('button:has-text("Cancel")');
  }

  async inputFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  async assertFirstname(firstName: string) {
    await expect(this.firstNameInput).toHaveValue(firstName);
  }

  async inputLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async assertLastName(lastName: string) {
    await expect(this.lastNameInput).toHaveValue(lastName);
  }

  async inputPostalCode(postalCode: string) {
    await this.postalCodeInput.fill(postalCode);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }
}
