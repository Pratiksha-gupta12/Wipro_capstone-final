
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