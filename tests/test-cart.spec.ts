import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { InventoryPage } from "../pages/inventory.page";

// Group tests that require a logged-in user
test.describe("Test Fungsi Shopping Cart", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  // login sebelum semua test scenario di jalankan
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    // login di awal sebelum test lain nya
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.assertLoginSuccess();
  });

  test("SL-CRT-001-Masukkan item ke cart", async ({ page }) => {
    await inventoryPage.addItemToCart("Sauce Labs Bolt T-Shirt");
    await inventoryPage.goToCart();

    await expect(page.locator(".inventory_item_name")).toHaveText(
      "Sauce Labs Bolt T-Shirt"
    );
  });

  test("SL-CRT-002-Masukkan item lain ke cart", async ({ page }) => {
    await inventoryPage.addItemToCart("Sauce Labs Backpack");
    await inventoryPage.goToCart();

    await expect(page.locator(".inventory_item_name")).toHaveText(
      "Sauce Labs Backpack"
    );
  });

  test("SL-CRT-003-Verifikasi item di dalam cart", async ({ page }) => {
    await inventoryPage.addItemToCart("Sauce Labs Fleece Jacket");
    await inventoryPage.assertItemInCart("Sauce Labs Fleece Jacket");
  });

  test("SL-CRT-004-Hapus item dari cart", async ({ page }) => {
    await inventoryPage.addItemToCart("Sauce Labs Backpack");
    await inventoryPage.removeItemFromCart("Sauce Labs Backpack");

    await expect(page.locator(".cart_item")).toHaveCount(0);
  });
});
