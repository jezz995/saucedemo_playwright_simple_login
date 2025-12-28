import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { InventoryPage } from "../pages/inventory.page";
import { CheckoutInfoPage } from "../pages/checkoutinfo.page";
import { CheckoutFinishPage } from "../pages/checkoutfinish.page";

test.describe("E2E Checkout Flow", () => {
  test("Testing E2E User login to checkout to finish", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutInfoPage = new CheckoutInfoPage(page);
    const checkoutFinishPage = new CheckoutFinishPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.assertLoginSuccess();

    await inventoryPage.addItemToCart("Sauce Labs Backpack");
    await inventoryPage.goToCart();
    await inventoryPage.goToCheckout();

    await checkoutInfoPage.inputFirstName("John");
    await checkoutInfoPage.inputLastName("Doe");
    await checkoutInfoPage.inputPostalCode("12345");
    await checkoutInfoPage.clickContinue();

    await checkoutFinishPage.clickFinish();
    await checkoutFinishPage.assertFinishMessage();
    await checkoutFinishPage.clickBackHome();

    await expect(page).toHaveURL(/inventory.html/);
  });
});
