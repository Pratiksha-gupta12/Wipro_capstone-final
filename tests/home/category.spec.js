// import { test, expect } from '@playwright/test';
// import { HomePage } from '../../pages/HomePage';

// test.describe('Category Navigation Tests', () => {

//     let homePage;

//     test.beforeEach(async ({ page }) => {
//         homePage = new HomePage(page);
//         await homePage.goto();
//     });

//     test('TC_HOME_CAT_001 - Verify Books Category Navigation', async ({ page }) => {

//         await homePage.openBooksCategory();

//         await expect(page).toHaveURL(/books/);
//     });

//     test('TC_HOME_CAT_002 - Verify Computers Category Navigation', async ({ page }) => {

//         await homePage.openComputersCategory();

//         await expect(page).toHaveURL(/computers/);
//     });

//     test('TC_HOME_CAT_003 - Verify Electronics Category Navigation', async ({ page }) => {

//         await homePage.openElectronicsCategory();

//         await expect(page).toHaveURL(/electronics/);
//     });

// });




import { test, expect } from '../../fixtures/baseFixture';

test.describe('Category Navigation Tests', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.goto();
    });

    test('TC_HOME_CAT_001 - Verify Books Category Navigation',
        async ({ homePage, page }) => {

            await homePage.openBooksCategory();

            await expect(page)
                .toHaveURL(/books/);

        });

    test('TC_HOME_CAT_002 - Verify Computers Category Navigation',
        async ({ homePage, page }) => {

            await homePage.openComputersCategory();

            await expect(page)
                .toHaveURL(/computers/);

        });

    test('TC_HOME_CAT_003 - Verify Electronics Category Navigation',
        async ({ homePage, page }) => {

            await homePage.openElectronicsCategory();

            await expect(page)
                .toHaveURL(/electronics/);

        });

});