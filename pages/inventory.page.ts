import { Page, Locator, expect } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly cartButton: Locator;
  readonly burgerMenu: Locator;
  readonly logoutButton: Locator;
  readonly removeButton: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartButton = page.locator("a.shopping_cart_link");
    this.burgerMenu = page.locator("#react-burger-menu-btn");
    this.logoutButton = page.locator("#logout_sidebar_link");
    this.removeButton = page.locator('button:has-text("Remove")');
    this.checkoutButton = page.locator('button:has-text("Checkout")');
    this.continueShoppingButton = page.locator(
      'button:has-text("Continue Shopping")'
    );
  }

  async addItemToCart(itemName: string) {
    const formattedItemName = itemName.toLowerCase().replace(/ /g, "-");
    const addButtonSelector = `#add-to-cart-${formattedItemName}`;
    await this.page.locator(addButtonSelector).click();
  }

  async removeItemFromCart(itemName: string) {
    const formattedItemName = itemName.toLowerCase().replace(/ /g, "-");
    const removeButtonSelector = `#remove-${formattedItemName}`;
    await this.page.locator(removeButtonSelector).click();
  }

  async continueShopAfter() {
    await this.continueShoppingButton.click();
  }

  async goToCart() {
    await this.cartButton.click();
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }

  async assertItemInCart(itemName: string) {
    await this.page.waitForSelector(".inventory_item_name");
  }

  async logout() {
    await this.burgerMenu.click();
    await this.logoutButton.click();
  }
}
