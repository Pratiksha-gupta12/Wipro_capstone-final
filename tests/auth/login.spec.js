import { test, expect } from '@playwright/test';
import { AuthPage } from '../../pages/AuthPage';

test.describe('Login Tests', () => {
    let authPage;

    test.beforeEach(async ({ page }) => {
        authPage = new AuthPage(page);
        await authPage.goto();
        await authPage.openLoginPage();
    });

  test('TC_AUTH_006 - Verify Login With Valid Credentials', async ({ page }) => {

    await authPage.login(
        'your_registered_email@gmail.com',
        'Test@123'
    );

    await expect(
        page.locator('.account')
    ).toBeVisible();

});

    test('TC_AUTH_007 - Verify Login With Invalid Password', async ({ page }) => {

        await authPage.login(
            'your_registered_email@gmail.com',
            'WrongPassword'
        );

        await expect(authPage.loginErrorMessage)
            .toContainText('Login was unsuccessful');
    });

    test('TC_AUTH_008 - Verify Login With Unregistered Email', async ({ page }) => {

        await authPage.login(
            `fake${Date.now()}@gmail.com`,
            'Test@123'
        );

        await expect(authPage.loginErrorMessage)
            .toContainText('Login was unsuccessful');
    });

    test('TC_AUTH_009 - Verify Login With Empty Credentials', async ({ page }) => {

        await authPage.loginButton.click();

        await expect(authPage.loginErrorMessage)
            .toContainText('Login was unsuccessful');
    });

    test('TC_AUTH_010 - Verify Remember Me Functionality', async ({ page }) => {

        await authPage.loginEmail.fill(
            'your_registered_email@gmail.com'
        );

        await authPage.loginPassword.fill(
            'Test@123'
        );

        await authPage.rememberMe.check();

        await authPage.loginButton.click();

        await expect(authPage.accountEmail)
            .toBeVisible();

        await page.reload();

        await expect(authPage.accountEmail)
            .toBeVisible();
    });

});