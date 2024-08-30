import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  //1. The bot logs into the website and looks for the input id search to ensure that the page is loaded.
  await page.goto("https://magento.softwaretestingboard.com/");
  let home_elem = page.locator("#search");
  await expect(home_elem).toBeVisible({ timeout: 10000 });

  //2. The bot clicks on the search tab using the placeholder
  let search_key = "tops";
  await page.getByPlaceholder("Search entire store here...").fill(search_key);

  //3. The bot clicks on search
  await page.getByRole("button", { name: "Search" }).click();

  //4. verify search
  try {
    await page.locator("span.base", {
      hasText: `Search results for: '${search_key}'`,
    });
  } catch (error) {
    console.log(error);
  }
});
