import { test, expect } from '../../fixtures/baseFixture';

test.describe('Wishlist Validation Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://demowebshop.tricentis.com/wishlist');

    });

    test('TC_WISH_VAL_001 - Verify Wishlist Page Visible', async ({ page }) => {

        await expect(page.locator('body'))
            .toContainText('Wishlist');

    });

    test('TC_WISH_VAL_002 - Verify Wishlist Title Visible', async ({ wishlistPage }) => {

        await expect(wishlistPage.pageTitle)
            .toBeVisible();

    });

    test('TC_WISH_VAL_003 - Verify Wishlist Title Text', async ({ wishlistPage }) => {

        await expect(wishlistPage.pageTitle)
            .toContainText('Wishlist');

    });

    test('TC_WISH_VAL_004 - Verify Wishlist URL', async ({ page }) => {

        await expect(page).toHaveURL(/wishlist/);

    });

    test('TC_WISH_VAL_005 - Verify HTML Visible', async ({ page }) => {

        await expect(page.locator('html'))
            .toBeVisible();

    });

    test('TC_WISH_VAL_006 - Verify Body Visible', async ({ page }) => {

        await expect(page.locator('body'))
            .toBeVisible();

    });

});