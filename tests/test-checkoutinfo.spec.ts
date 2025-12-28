import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { InventoryPage } from "../pages/inventory.page";
import { CheckoutInfoPage } from "../pages/checkoutinfo.page.ts";

test.describe("Test Fungsi Checkout info", () => {
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

    //masukkan barang ke cart dan tap checkout
    await inventoryPage.addItemToCart("Sauce Labs Backpack");
    await inventoryPage.goToCart();
    await inventoryPage.goToCheckout();
  });

  test("SL-CKO-001 Input Data lengkap dan lakukan checkout", async ({
    page,
  }) => {
    const checkoutInfoPage = new CheckoutInfoPage(page);
    await checkoutInfoPage.inputFirstName("John");
    await checkoutInfoPage.inputLastName("Doe");
    await checkoutInfoPage.inputPostalCode("12345");
    await checkoutInfoPage.clickContinue();
    await expect(page).toHaveURL(/.*checkout-step-two.html/);
  });

  test("SL-CK0-002 input data lengkap dan batal checkout ", async ({
    page,
  }) => {
    const checkoutInfoPage = new CheckoutInfoPage(page);
    await checkoutInfoPage.inputFirstName("John");
    await checkoutInfoPage.inputLastName("Doe");
    await checkoutInfoPage.inputPostalCode("12345");
    await checkoutInfoPage.clickCancel();
    await expect(page).toHaveURL(/.*cart.html/);
  });

  test("SL-CK0-003 input data tidak lengkap dan tap checkout", async ({
    page,
  }) => {
    const checkoutInfoPage = new CheckoutInfoPage(page);
    await checkoutInfoPage.inputFirstName("John");
    await checkoutInfoPage.inputLastName("");
    await checkoutInfoPage.inputPostalCode("12345");
    await checkoutInfoPage.clickContinue();
  });
});
