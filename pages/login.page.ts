import {Locator, Page} from "@playwright/test";

export class LoginPage {

    readonly usernameField : Locator;
    readonly passwordField : Locator;
    readonly loginButton : Locator;

    constructor(private readonly page : Page) {
        this.usernameField = page.getByPlaceholder("Username");
        this.passwordField = page.getByPlaceholder("Password");
        this.loginButton = page.locator("#login-button");
    }

    async loginToApplication(username : string, password : string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async navigateSomething() {
        console.log("Hello")
    }
}
