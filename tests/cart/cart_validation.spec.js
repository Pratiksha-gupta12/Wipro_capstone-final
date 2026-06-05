
import { test, expect } from '../../fixtures/baseFixture';

test.describe('Cart Validation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/cart');
    });

    test('TC_CART_VAL_001 - Verify Cart URL',
        async ({ page }) => {

            await expect(page)
                .toHaveURL(/cart/);

        });

    test('TC_CART_VAL_002 - Verify Shopping Cart Title',
        async ({ cartPage }) => {

            await expect(
                cartPage.pageTitle
            ).toContainText('Shopping cart');

        });

    test('TC_CART_VAL_003 - Verify Cart Page Is Visible',
        async ({ page }) => {

            await expect(
                page.locator('body')
            ).toContainText('Shopping cart');

        });

    test('TC_CART_VAL_004 - Verify Empty Cart Message',
        async ({ cartPage }) => {

            await expect(
                cartPage.emptyCartMessage
            ).toContainText('Your Shopping Cart is empty');

        });

    test('TC_CART_VAL_005 - Verify Continue Shopping Link Exists',
        async ({ page }) => {

            await expect(
                page.getByRole('link', { name: /Books/i })
            ).toBeVisible();

        });

    test('TC_CART_VAL_006 - Verify Page Loads Without Errors',
        async ({ page }) => {

            await expect(
                page.locator('body')
            ).toBeVisible();

        });

});