// import { test, expect } from "@playwright/test";

// test("has title", async ({ page }) => {
//   //1. The bot logs into the website and looks for the input id search to ensure that the page is loaded.
//   await page.goto("https://magento.softwaretestingboard.com/");
//   let home_elem = page.locator("#search");
//   await expect(home_elem).toBeVisible({ timeout: 10000 });

//   //2. The bot clicks on the Women drop-down tab
//   await page.locator('//*[@id="ui-id-4"]/span[2]').click();

//   //3. The bot waits to ensure that the page is loaded and clicks on "tops" from the Shop By Category
//   await expect(page.getByRole("link", { name: "Tops" })).toBeVisible({
//     timeout: 10000,
//   });
//   await page.getByRole("link", { name: "Tops" }).click();
// });
