// import { test, expect } from '@playwright/test';
// import { HomePage } from '../../pages/HomePage';

// test.describe('Homepage UI Validation', () => {

//     let homePage;

//     test.beforeEach(async ({ page }) => {
//         homePage = new HomePage(page);
//         await homePage.goto();
//     });

//     test('TC_HOME_UI_001 - Verify Homepage Loads Successfully', async ({ page }) => {

//         await expect(page).toHaveTitle(
//             'Demo Web Shop'
//         );

//     });

//     test('TC_HOME_UI_002 - Verify Website Logo Is Displayed', async () => {

//         await expect(homePage.logo)
//             .toBeVisible();

//     });

//     test('TC_HOME_UI_003 - Verify Footer Section Is Displayed', async () => {

//         await expect(homePage.footer)
//             .toBeVisible();

//     });

// });



import { test, expect } from '../../fixtures/baseFixture';

test.describe('Homepage UI Validation', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.goto();
    });

    test('TC_HOME_UI_001 - Verify Homepage Loads Successfully',
        async ({ page }) => {

            await expect(page)
                .toHaveTitle('Demo Web Shop');

        });

    test('TC_HOME_UI_002 - Verify Website Logo Is Displayed',
        async ({ homePage }) => {

            await expect(
                homePage.logo
            ).toBeVisible();

        });

    test('TC_HOME_UI_003 - Verify Footer Section Is Displayed',
        async ({ homePage }) => {

            await expect(
                homePage.footer
            ).toBeVisible();

        });

});