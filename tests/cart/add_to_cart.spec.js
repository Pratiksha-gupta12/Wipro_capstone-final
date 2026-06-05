
import { test, expect } from '../../fixtures/baseFixture';

test.describe('Shopping Cart Navigation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');
    });

    test('TC_CART_001 - Verify Shopping Cart Link Is Visible',
        async ({ cartPage }) => {

            await expect(
                cartPage.cartLink
            ).toBeVisible();

        });

    test('TC_CART_002 - Verify Cart Count Is Displayed',
        async ({ cartPage }) => {

            await expect(
                cartPage.cartQty
            ).toBeVisible();

        });

    test('TC_CART_003 - Verify User Can Navigate To Cart Page',
        async ({ page, cartPage }) => {

            await cartPage.openCart();

            await expect(page)
                .toHaveURL(/cart/);

        });

    test('TC_CART_004 - Verify Cart Page Loads Successfully',
        async ({ cartPage }) => {

            await cartPage.openCart();

            await expect(
                cartPage.shoppingCartPage
            ).toBeVisible();

        });

    test('TC_CART_005 - Verify Shopping Cart Header Is Visible',
        async ({ cartPage }) => {

            await cartPage.openCart();

            await expect(
                cartPage.pageTitle
            ).toContainText('Shopping cart');

        });

    test('TC_CART_006 - Verify Empty Cart Page Opens',
        async ({ page, cartPage }) => {

            await cartPage.openCart();

            await expect(
                page.locator('body')
            ).toContainText('Shopping cart');

        });

});