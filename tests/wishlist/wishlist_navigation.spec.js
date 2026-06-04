import { test, expect } from '../../fixtures/baseFixture';

test.describe('Wishlist Navigation Tests', () => {

    test.beforeEach(async ({ wishlistPage }) => {
        await wishlistPage.navigateToHome();
    });

    test('TC_WISH_NAV_001 - Verify Wishlist Link Visible', async ({ wishlistPage }) => {

        await expect(wishlistPage.wishlistLink).toBeVisible();

    });

    test('TC_WISH_NAV_002 - Verify Wishlist Navigation', async ({ page, wishlistPage }) => {

        await wishlistPage.openWishlist();

        await expect(page).toHaveURL(/wishlist/);

    });

    test('TC_WISH_NAV_003 - Verify Wishlist Page Title', async ({ wishlistPage }) => {

        await wishlistPage.openWishlist();

        await expect(wishlistPage.pageTitle)
            .toContainText('Wishlist');

    });

    test('TC_WISH_NAV_004 - Verify Wishlist Header Visible', async ({ wishlistPage }) => {

        await wishlistPage.openWishlist();

        await expect(wishlistPage.pageTitle)
            .toBeVisible();

    });

    test('TC_WISH_NAV_005 - Verify Wishlist Page Loaded', async ({ page, wishlistPage }) => {

        await wishlistPage.openWishlist();

        await expect(page.locator('body'))
            .toContainText('Wishlist');

    });

    test('TC_WISH_NAV_006 - Verify Wishlist URL', async ({ page, wishlistPage }) => {

        await wishlistPage.openWishlist();

        expect(page.url()).toContain('/wishlist');

    });

});