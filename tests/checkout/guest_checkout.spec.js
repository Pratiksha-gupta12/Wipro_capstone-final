
import { test, expect } from '../../fixtures/baseFixture';

test.describe('Guest Checkout Tests', () => {

    test.beforeEach(async ({ checkoutPage }) => {

        await checkoutPage.openLoginPage();

    });

    test('TC_GUEST_001 - Verify Login Button Visible',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.loginButton
            ).toBeVisible();

        });

    test('TC_GUEST_002 - Verify Register Button Visible',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.registerButton
            ).toBeVisible();

        });

    test('TC_GUEST_003 - Verify Login Page Title',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.pageTitle
            ).toContainText(
                'Welcome, Please Sign In!'
            );

        });

    test('TC_GUEST_004 - Verify Email Field Visible',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.emailField
            ).toBeVisible();

        });

    test('TC_GUEST_005 - Verify Password Field Visible',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.passwordField
            ).toBeVisible();

        });

    test('TC_GUEST_006 - Verify Login Button Enabled',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.loginButton
            ).toBeEnabled();

        });

});