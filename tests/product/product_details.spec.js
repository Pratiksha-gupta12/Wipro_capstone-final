
import { test, expect } from '../../fixtures/baseFixture';

test.describe('Product Details Tests', () => {

    test.beforeEach(async ({ productPage }) => {

        await productPage.navigateToBooks();
        await productPage.openComputingAndInternet();

    });

    test('TC_PROD_DET_001 - Verify Product Name',
        async ({ productPage }) => {

            await expect(
                productPage.productTitle
            ).toContainText('Computing and Internet');

        });

    test('TC_PROD_DET_002 - Verify Product Price Exists',
        async ({ productPage }) => {

            const price =
                await productPage.getProductPrice();

            expect(price).not.toBeNull();

        });

    test('TC_PROD_DET_003 - Verify Product Image Exists',
        async ({ productPage }) => {

            await expect(
                productPage.productImage
            ).toBeVisible();

        });

    test('TC_PROD_DET_004 - Verify Add To Cart Button Exists',
        async ({ productPage }) => {

            await expect(
                productPage.addToCartButton
            ).toBeEnabled();

        });

    test('TC_PROD_DET_005 - Verify Breadcrumb Exists',
        async ({ productPage }) => {

            await expect(
                productPage.breadcrumb
            ).toBeVisible();

        });

    test('TC_PROD_DET_006 - Verify Review Link Exists',
        async ({ productPage }) => {

            await expect(
                productPage.addReviewLink
            ).toContainText(
                'Add your review'
            );

        });

});