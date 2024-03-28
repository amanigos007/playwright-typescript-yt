import {test} from "@playwright/test";

test('Locator demo test', async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //await page.getByRole("textbox", {name: "username"}).fill("Admin");
    //await page.getByPlaceholder(/username/i).fill("Admin");
    await page.getByText("").fill("Admin");
    await page.waitForTimeout(5_000);
});