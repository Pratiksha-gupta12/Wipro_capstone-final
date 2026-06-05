import { test, expect } from '../../fixtures/baseFixture';

test.describe('Wishlist Management Tests', () => {

    test.beforeEach(async ({ wishlistPage }) => {

        await wishlistPage.navigateToHome();

    });

   
    test('TC_WISH_MGMT_01 - Verify Wishlist Link Enabled',
        async ({ wishlistPage }) => {

            await expect(
                wishlistPage.wishlistLink
            ).toBeEnabled();

        });

    test('TC_WISH_MGMT_02 - Verify Wishlist Header Visible',
        async ({ wishlistPage }) => {

            await wishlistPage.openWishlist();

            await expect(
                wishlistPage.pageTitle
            ).toContainText('Wishlist');

        });

});