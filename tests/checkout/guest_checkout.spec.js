// import { test, expect } from '@playwright/test';

// test.describe('Guest Checkout Tests', () => {

//     test.beforeEach(async ({ page }) => {

//         await page.goto('https://demowebshop.tricentis.com/login');
//     });

//     test('TC_GUEST_001 - Verify Login Button Visible', async ({ page }) => {

//         await expect(
//             page.locator('.login-button')
//         ).toBeVisible();
//     });

//     test('TC_GUEST_002 - Verify Register Button Visible', async ({ page }) => {

//         await expect(
//             page.locator('.register-button')
//         ).toBeVisible();
//     });

//     test('TC_GUEST_003 - Verify Login Page Title', async ({ page }) => {

//         await expect(
//             page.locator('.page-title')
//         ).toContainText('Welcome, Please Sign In!');
//     });

//     test('TC_GUEST_004 - Verify Email Field Visible', async ({ page }) => {

//         await expect(
//             page.locator('#Email')
//         ).toBeVisible();
//     });

//     test('TC_GUEST_005 - Verify Password Field Visible', async ({ page }) => {

//         await expect(
//             page.locator('#Password')
//         ).toBeVisible();
//     });

//     test('TC_GUEST_006 - Verify Login Button Enabled', async ({ page }) => {

//         await expect(
//             page.locator('.login-button')
//         ).toBeEnabled();
//     });

// });



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