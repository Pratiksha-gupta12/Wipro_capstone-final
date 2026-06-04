// import { test, expect } from '@playwright/test';
// import { CheckoutPage } from '../../pages/CheckoutPage';

// test.describe('Checkout Navigation Tests', () => {

//     let checkoutPage;

//     test.beforeEach(async ({ page }) => {

//         checkoutPage = new CheckoutPage(page);

//         await page.goto('https://demowebshop.tricentis.com/cart');
//     });

//     test('TC_CHECKOUT_001 - Verify Cart Page Opens', async ({ page }) => {

//         await expect(page).toHaveURL(/cart/);

//     });

//     test('TC_CHECKOUT_002 - Verify Shopping Cart Title Visible', async () => {

//         await expect(checkoutPage.pageTitle)
//             .toContainText('Shopping cart');

//     });

//     test('TC_CHECKOUT_003 - Verify Cart Page Loaded Successfully', async ({ page }) => {

//         await expect(page.locator('body'))
//             .toContainText('Shopping cart');

//     });

//     test('TC_CHECKOUT_004 - Verify Cart URL Contains Cart', async ({ page }) => {

//         expect(page.url()).toContain('/cart');

//     });

//     test('TC_CHECKOUT_005 - Verify Page Title Locator Visible', async () => {

//         await expect(checkoutPage.pageTitle)
//             .toBeVisible();

//     });

//     test('TC_CHECKOUT_006 - Verify Body Visible', async ({ page }) => {

//         await expect(page.locator('body'))
//             .toBeVisible();

//     });

// });




import { test, expect } from '../../fixtures/baseFixture';

test.describe('Checkout Navigation Tests', () => {

    test.beforeEach(async ({ checkoutPage }) => {
        await checkoutPage.openCartPage();
    });

    test('TC_CHECKOUT_NAV_001 - Verify Cart Page Opens',
        async ({ page }) => {

            await expect(page).toHaveURL(/cart/);

        });

    test('TC_CHECKOUT_NAV_002 - Verify Shopping Cart Title',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.pageTitle
            ).toContainText('Shopping cart');

        });

    test('TC_CHECKOUT_NAV_003 - Verify Cart Page Visible',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.body
            ).toBeVisible();

        });

    test('TC_CHECKOUT_NAV_004 - Verify Cart URL Contains Cart',
        async ({ page }) => {

            expect(page.url()).toContain('/cart');

        });

    test('TC_CHECKOUT_NAV_005 - Verify Page Title Visible',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.pageTitle
            ).toBeVisible();

        });

    test('TC_CHECKOUT_NAV_006 - Verify Body Visible',
        async ({ checkoutPage }) => {

            await expect(
                checkoutPage.body
            ).toBeVisible();

        });

});