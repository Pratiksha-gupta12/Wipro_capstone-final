import { test, expect } from '@playwright/test';
import { AuthPage } from '../../pages/AuthPage';

test.describe('Forgot Password Tests', () => {

    let authPage;

    test.beforeEach(async ({ page }) => {
        authPage = new AuthPage(page);

        await authPage.goto();
        await authPage.openLoginPage();
        await authPage.openForgotPassword();
    });

    test('TC_AUTH_013 - Verify Password Recovery Response', async ({ page }) => {

    await authPage.recoveryEmail.fill(
        'test@gmail.com'
    );

    await authPage.recoverButton.click();

    await expect(
        authPage.recoveryResult
    ).toBeVisible();
});
test('TC_AUTH_014 - Verify Password Recovery With Unregistered Email', async ({ page }) => {

    await authPage.recoveryEmail.fill(
        `fake${Date.now()}@gmail.com`
    );

    await authPage.recoverButton.click();

    await expect(
        authPage.recoveryResult
    ).toContainText('Email not found');
});
    test('TC_AUTH_015 - Verify Password Recovery With Empty Email Field', async ({ page }) => {

        await authPage.recoverButton.click();

        await expect(
            authPage.emailError
        ).toContainText(
            'Enter your email'
        );
    });

});