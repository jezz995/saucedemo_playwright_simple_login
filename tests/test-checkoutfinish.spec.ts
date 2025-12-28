import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { InventoryPage } from "../pages/inventory.page";
import { CheckoutInfoPage } from "../pages/checkoutinfo.page.ts";
import { CheckoutFinishPage } from "../pages/checkoutfinish.page.ts";

test.describe("Test Fungsi Checkout finish", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let checkoutInfoPage: CheckoutInfoPage;

  // login sebelum semua test scenario di jalankan
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    checkoutInfoPage = new CheckoutInfoPage(page);

    // login di awal sebelum test lain nya
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.assertLoginSuccess();

    //masukkan barang ke cart dan tap checkout
    await inventoryPage.addItemToCart("Sauce Labs Backpack");
    await inventoryPage.goToCart();
    await inventoryPage.goToCheckout();

    //isi data lalu lanjut ke checkout barang
    await checkoutInfoPage.inputFirstName("John");
    await checkoutInfoPage.inputLastName("Doe");
    await checkoutInfoPage.inputPostalCode("12345");
    await checkoutInfoPage.clickContinue();
  });

  test("SL-CKF-001 User Finish checkout", async ({ page }) => {
    const checkoutFinishPage = new CheckoutFinishPage(page);
    await checkoutFinishPage.clickFinish();
    await checkoutFinishPage.assertFinishMessage();
    await checkoutFinishPage.clickBackHome();
    await expect(page).toHaveURL(/.*inventory.html/);
  });
  test("SL-CKF-002 User Cancel Checkout", async ({ page }) => {
    const checkoutFinishPage = new CheckoutFinishPage(page);
    await checkoutFinishPage.clickCancel();
    await expect(page).toHaveURL(/.*inventory.html/);
  });
});
