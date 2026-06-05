
import { test, expect } from '../../fixtures/baseFixture';

test.describe('Checkout Validation Tests', () => {

    test.beforeEach(async ({ checkoutPage }) => {
        await checkoutPage.openLoginPage();
    });

    test('TC_CHECKOUT_VAL_001 - Verify Login Button Visible',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.loginButton
            ).toBeVisible();

        });

    test('TC_CHECKOUT_VAL_002 - Verify Register Button Visible',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.registerButton
            ).toBeVisible();

        });

    test('TC_CHECKOUT_VAL_003 - Verify Email Field Visible',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.emailField
            ).toBeVisible();

        });

    test('TC_CHECKOUT_VAL_004 - Verify Password Field Visible',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.passwordField
            ).toBeVisible();

        });

    test('TC_CHECKOUT_VAL_005 - Verify Login Button Enabled',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.loginButton
            ).toBeEnabled();

        });

    test('TC_CHECKOUT_VAL_006 - Verify Login Page Title',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.pageTitle
            ).toContainText(
                'Welcome, Please Sign In!'
            );

        });

});