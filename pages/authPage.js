import { expect } from '@playwright/test';

export class AuthPage {
    constructor(page) {
        this.page = page;

       
        this.registerLink = page.locator('.ico-register');
        this.loginLink = page.locator('.ico-login');
        this.logoutLink = page.locator('.ico-logout');

      
        this.genderMale = page.locator('#gender-male');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');

        this.loginEmail = page.locator('#Email');
        this.loginPassword = page.locator('#Password');
        this.rememberMe = page.locator('#RememberMe');
        this.loginButton = page.locator('input[value="Log in"]');

        this.forgotPasswordLink = page.locator('.forgot-password a');
        this.recoveryEmail = page.locator('#Email');
        this.recoverButton = page.locator('input[value="Recover"]');

        
this.registrationSuccessMessage = page.locator('.result');
this.validationSummary = page.locator('.validation-summary-errors');


this.accountEmail = page.locator('.account');


this.recoveryResult = page.locator('.result');


this.loginErrorMessage = page.locator('.validation-summary-errors');
this.accountEmail = page.locator('.account');

// Forgot Password
this.forgotPasswordLink = page.locator('.forgot-password a');
this.recoveryEmail = page.locator('#Email');
this.recoverButton = page.locator('input[value="Recover"]');

// Recovery Messages
this.recoveryResult = page.locator('.result');
this.emailError = page.locator('span[for="Email"]');
    }

    async goto() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async openRegisterPage() {
        await this.registerLink.click();
    }

    async registerUser(user) {
        await this.genderMale.check();
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.email.fill(user.email);
        await this.password.fill(user.password);
        await this.confirmPassword.fill(user.confirmPassword);
        await this.registerButton.click();
    }

    async openLoginPage() {
        await this.loginLink.click();
    }

    async login(email, password) {
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }

    async logout() {
        await this.logoutLink.click();
    }

    async openForgotPassword() {
        await this.forgotPasswordLink.click();
    }

    async recoverPassword(email) {
        await this.recoveryEmail.fill(email);
        await this.recoverButton.click();
    }
}