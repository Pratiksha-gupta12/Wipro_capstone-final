
import { test, expect } from '../../fixtures/baseFixture';

test.describe('Content Validation Tests', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.goto();
    });

    test('TC_HOME_CONTENT_001 - Verify Featured Products Section Contains Products',
        async ({ homePage }) => {

            await expect(
                homePage.featuredProductsSection
            ).toBeVisible();

            const count =
                await homePage.getProductCount();

            expect(count)
                .toBeGreaterThan(0);

        });

    test('TC_HOME_CONTENT_002 - Verify Product Details Are Displayed Correctly',
        async ({ homePage }) => {

            await expect(
                homePage.productNames.first()
            ).toBeVisible();

            await expect(
                homePage.productPrices.first()
            ).toBeVisible();

            await expect(
                homePage.productImages.first()
            ).toBeVisible();

            const productName =
                await homePage.getFirstProductName();

            expect(productName.trim().length)
                .toBeGreaterThan(0);

        });

});