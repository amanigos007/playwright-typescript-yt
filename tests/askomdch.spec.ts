import { test, expect } from '@playwright/test';
import {LoginPage} from "../pages/login.page";

test('Add to cart test', async ({ page }) => {
    await page.goto('https://askomdch.com/');
    await page.locator('#menu-item-1228').getByRole('link', { name: 'Men' }).click();
    await page.getByPlaceholder('Search products…').click();
    await page.getByPlaceholder('Search products…').fill('Blue');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByLabel('Add “Blue Shoes” to your cart').click();
    await page.getByRole('link', { name: 'View cart' }).click();
    await expect(page.locator('#post-1220')).toContainText('Blue Shoes');
});

test("Page object model test", async ({page}) => {
    const loginPage = new LoginPage(page)
    await page.goto("https://www.saucedemo.com/v1/");
    await loginPage.loginToApplication("standard_user", "secret_sauce");
    await loginPage.navigateSomething();
});