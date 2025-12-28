# 🎭 Playwright UI Automation Project

This project demonstrates **end-to-end automation testing** using **Playwright**, covering **UI testing**
It is designed as a **learning and portfolio project** for QA / SDET roles.

---

## 🚀 Tech Stack

- **Playwright**
- **TypeScript**
- **npm**
- **Chromium / Firefox / WebKit**

---

## 🧪 Test Coverage

- Login functionality
- E2E Testing
- Functionality Testing
- Cross-browser testing

### ✅ UI Testing

- Login functionality
- Cart functionality
- Checkout Functionality
- Cross-browser testing

### ✅ API Testing

- To be Continued i will do both UI and API Testing in single framework

---

## 🌐 Test Websites Used

- **UI Demo**: [https://www.saucedemo.com](https://www.saucedemo.com)
  _(Demo websites used for learning & testing purposes only)_

---

## 📁 Project Structure

```
playwright-project/
├── src/
│   ├── pages/
|   |   |── login.page.ts                 # Page Object Model (POM)
|   |   |── inventory.page.ts             # Page Object Model (POM)
|   |   |── checkoutinfo.page.ts          # Page Object Model (POM)
|   |   |── checkoutfinish.page.ts        # Page Object Model (POM)   
│   ├── tests/
│   │   ├── test-login.spec.ts             #Test scenario
│   │   ├── test-cart.spec.ts              #Test scenario
│   │   ├── test-checkoutinfo.spec.ts      #Test scenario
│   │   ├── test-checkoutfinish.spec.ts    #Test scenario
│   │   ├── test-E2E.spec.ts               #Test scenario
├── playwright.config.ts
├── package.json
└── README.md
```

---

## ▶️ How to Run the Tests

### 1️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run Test by scenario

```bash
npx playwright test test-login.spec.ts
npx playwright test test-cart.spec.ts
npx playwright test test-checkoutinfo.spec.ts
npx playwright test test-checkoutfinish.spec.ts
npx playwright test test-E2E.spec.ts
```
or if you want to run all the test at the same time
---
npx playwright test
---

## 🌍 Run Tests in Different Browsers

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## 🧠 Why Playwright?

- Auto-waiting & stable tests
- Cross-browser testing out of the box
- Modern & in-demand automation framework
- Ideal for \*\*QA
