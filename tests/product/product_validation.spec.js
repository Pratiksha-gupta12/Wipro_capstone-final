
import { test, expect } from '../../fixtures/baseFixture';

test.describe('Product Validation Tests', () => {

    test.beforeEach(async ({ productPage }) => {

        await productPage.navigateToBooks();
        await productPage.openComputingAndInternet();

    });

    test('TC_PROD_VAL_001 - Verify Product Title Not Empty',
        async ({ productPage }) => {

            const title =
                await productPage.getProductTitle();

            expect(
                title.trim().length
            ).toBeGreaterThan(0);

        });

    test('TC_PROD_VAL_002 - Verify Product Price Not Empty',
        async ({ productPage }) => {

            const price =
                await productPage.getProductPrice();

            expect(
                price.trim().length
            ).toBeGreaterThan(0);

        });

    test('TC_PROD_VAL_003 - Verify Product Image Visible',
        async ({ productPage }) => {

            await expect(
                productPage.productImage
            ).toBeVisible();

        });

    test('TC_PROD_VAL_004 - Verify Add To Cart Button Enabled',
        async ({ productPage }) => {

            await expect(
                productPage.addToCartButton
            ).toBeEnabled();

        });

    test('TC_PROD_VAL_005 - Verify Breadcrumb Visible',
        async ({ productPage }) => {

            await expect(
                productPage.breadcrumb
            ).toBeVisible();

        });

    test('TC_PROD_VAL_006 - Verify Review Link Visible',
        async ({ productPage }) => {

            await expect(
                productPage.addReviewLink
            ).toBeVisible();

        });

});