// import { test, expect } from '@playwright/test';
// import { HomePage } from '../../pages/HomePage';

// test.describe('Header Navigation Tests', () => {

//     let homePage;

//     test.beforeEach(async ({ page }) => {
//         homePage = new HomePage(page);
//         await homePage.goto();
//     });

//     test('TC_HOME_NAV_001 - Verify Register Link Navigation', async ({ page }) => {

//         await homePage.registerLink.click();

//         await expect(page).toHaveURL(/register/);

//         await expect(page.locator('.page-title'))
//             .toContainText('Register');
//     });

//     test('TC_HOME_NAV_002 - Verify Login Link Navigation', async ({ page }) => {

//         await homePage.loginLink.click();

//         await expect(page).toHaveURL(/login/);

//         await expect(page.locator('.page-title'))
//             .toContainText('Welcome, Please Sign In!');
//     });

//     test('TC_HOME_NAV_003 - Verify Shopping Cart Navigation', async ({ page }) => {

//         await homePage.cartLink.click();

//         await expect(page).toHaveURL(/cart/);

//         await expect(page.locator('.page-title'))
//             .toContainText('Shopping cart');
//     });

//     test('TC_HOME_NAV_004 - Verify Wishlist Navigation', async ({ page }) => {

//         await homePage.wishlistLink.click();

//         await expect(page).toHaveURL(/wishlist/);

//         await expect(page.locator('.page-title'))
//             .toContainText('Wishlist');
//     });

// });




import { test, expect } from '../../fixtures/baseFixture';

test.describe('Header Navigation Tests', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.goto();
    });

    test('TC_HOME_NAV_001 - Verify Register Link Navigation',
        async ({ homePage, page }) => {

            await homePage.registerLink.click();

            await expect(page)
                .toHaveURL(/register/);

            await expect(
                page.locator('.page-title')
            ).toContainText('Register');

        });

    test('TC_HOME_NAV_002 - Verify Login Link Navigation',
        async ({ homePage, page }) => {

            await homePage.loginLink.click();

            await expect(page)
                .toHaveURL(/login/);

            await expect(
                page.locator('.page-title')
            ).toContainText(
                'Welcome, Please Sign In!'
            );

        });

    test('TC_HOME_NAV_003 - Verify Shopping Cart Navigation',
        async ({ homePage, page }) => {

            await homePage.cartLink.click();

            await expect(page)
                .toHaveURL(/cart/);

            await expect(
                page.locator('.page-title')
            ).toContainText('Shopping cart');

        });

    test('TC_HOME_NAV_004 - Verify Wishlist Navigation',
        async ({ homePage, page }) => {

            await homePage.wishlistLink.click();

            await expect(page)
                .toHaveURL(/wishlist/);

            await expect(
                page.locator('.page-title')
            ).toContainText('Wishlist');

        });

});