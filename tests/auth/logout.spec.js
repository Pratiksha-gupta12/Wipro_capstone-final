import { test, expect } from '@playwright/test';
import { AuthPage } from '../../pages/AuthPage';

test.describe('Logout Tests', () => {

    let authPage;

    const VALID_USER = {
        email: 'your_registered_email@gmail.com',
        password: 'Test@123'
    };

    test.beforeEach(async ({ page }) => {
        authPage = new AuthPage(page);

        await authPage.goto();
        await authPage.openLoginPage();

        await authPage.login(
            VALID_USER.email,
            VALID_USER.password
        );
    });

   test('TC_AUTH_011 - Verify Logout Link Visibility After Login', async ({ page }) => {

    await authPage.goto();
    await authPage.openLoginPage();

    await authPage.login(
        'YOUR_VALID_EMAIL@gmail.com',
        'Test@123'
    );

    await expect(page.locator('.account')).toBeVisible();
});
test('TC_AUTH_012 - Verify Login and Register Links Visibility', async ({ page }) => {

    await authPage.goto();

    await expect(authPage.loginLink).toBeVisible();

    await expect(authPage.registerLink).toBeVisible();
});

});