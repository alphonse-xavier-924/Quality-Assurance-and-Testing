import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test("has title", async ({ page }) => {
  //1. The bot logs into the website and looks for the input id search to ensure that the page is loaded.
  await page.goto("https://magento.softwaretestingboard.com/");
  let home_elem = page.locator("#search");
  await expect(home_elem).toBeVisible({ timeout: 10000 });

  //2. The bot clicks on "Create an account"
  await page.getByRole("link", { name: "Create an Account" }).click();

  //3. The bot checks with the page has been loaded.
  await expect(page.getByText("Create New Customer Account")).toBeVisible({
    timeout: 10000,
  });

  //4. The bot fills in the first name data
  await page.getByLabel("First Name").fill("John");

  //5. The bot fills in the last name data
  await page.getByLabel("Last Name").fill("Doe");

  //6. The bot fills in the email data
  await page.locator("#email_address").fill(process.env.USER_NAME);

  //7. The bot fills in the password
  await page.locator("#password").fill(process.env.PASSWORD);

  //8. The bot enters the password again
  await page.getByLabel("Confirm Password").fill(process.env.PASSWORD);

  //9. The bot clicks on create an account button
  await page.getByRole("button", { name: /create an account/i }).click();
});
