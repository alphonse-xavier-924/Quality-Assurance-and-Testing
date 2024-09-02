import { test as base, expect } from "@playwright/test";

export const test = base.extend({
  page: async ({ page }, use) => {
    // 1. Navigate to the website and check the search element
    await page.goto("https://magento.softwaretestingboard.com/");
    let home_elem = page.locator("#search");
    await expect(home_elem).toBeVisible({ timeout: 10000 });

    // 2. Click on the Women drop-down tab
    await page.locator('//*[@id="ui-id-4"]/span[2]').click();

    // 3. Wait and click on "Tops" from the Shop By Category
    await expect(page.getByRole("link", { name: "Tops" })).toBeVisible({
      timeout: 10000,
    });
    await page.getByRole("link", { name: "Tops" }).click();

    // Use the page after initial setup
    await use(page);
  },
});
