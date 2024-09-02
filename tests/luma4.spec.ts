import { test } from "./fixture";

test("continue after navigating to Tops", async ({ page }) => {
  //Clicking on the Style tab
  await page.getByRole("tab", { name: "Style" }).click();

  //Clicking on a specific style
  await page.getByRole("link", { name: "Lightweight" }).click();

  //await page.waitForTimeout(5000); // 5000ms = 5 seconds
});
