// import { test, expect } from '@playwright/test';
// import { ProductPage } from '../../pages/ProductPage';

// test.describe('Product Navigation Tests', () => {

//     let productPage;

//     test.beforeEach(async ({ page }) => {
//         productPage = new ProductPage(page);
//         await productPage.navigateToBooks();
//     });

//     test('TC_PROD_NAV_001 - Open Product Details Page', async ({ page }) => {
//         await productPage.openComputingAndInternet();
//         await expect(page).toHaveURL(/computing-and-internet/);
//     });

//     test('TC_PROD_NAV_002 - Verify Product Details Page Loads', async () => {
//         await productPage.openComputingAndInternet();
//         await expect(productPage.productTitle).toBeVisible();
//     });

//     test('TC_PROD_NAV_003 - Verify Product Title Visible', async () => {
//         await productPage.openComputingAndInternet();
//         await expect(productPage.productTitle).toContainText('Computing and Internet');
//     });

//     test('TC_PROD_NAV_004 - Verify Product Price Visible', async () => {
//         await productPage.openComputingAndInternet();
//         await expect(productPage.productPrice).toBeVisible();
//     });

//    test('TC_PROD_NAV_005 - Verify Add To Cart Button Visible', async ({ page }) => {

//     await productPage.openComputingAndInternet();

//     const addToCartBtn = page.locator('.add-to-cart-button').first();

//     await expect(addToCartBtn).toBeVisible();

// });

//     test('TC_PROD_NAV_006 - Verify Product Image Visible', async () => {
//         await productPage.openComputingAndInternet();
//         await expect(productPage.productImage).toBeVisible();
//     });

// });




import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';

test.describe('Product Validation Tests', () => {

    let productPage;

    test.beforeEach(async ({ page }) => {

        productPage = new ProductPage(page);

        await productPage.navigateToBooks();
        await productPage.openComputingAndInternet();
    });

    test('TC_PROD_VAL_001 - Verify Product Title Not Empty', async () => {

        const title = await productPage.getProductTitle();

        expect(title.trim().length).toBeGreaterThan(0);
    });

    test('TC_PROD_VAL_002 - Verify Product Price Not Empty', async () => {

        const price = await productPage.getProductPrice();

        expect(price.trim().length).toBeGreaterThan(0);
    });

    test('TC_PROD_VAL_003 - Verify Product Image Visible', async () => {

        await expect(productPage.productImage).toBeVisible();
    });

    test('TC_PROD_VAL_004 - Verify Add To Cart Button Enabled', async () => {

        await expect(productPage.addToCartButton).toBeEnabled();
    });

    test('TC_PROD_VAL_005 - Verify Breadcrumb Visible', async () => {

        await expect(productPage.breadcrumb).toBeVisible();
    });

    test('TC_PROD_VAL_006 - Verify Review Link Visible', async () => {

        await expect(productPage.addReviewLink).toBeVisible();
    });

});