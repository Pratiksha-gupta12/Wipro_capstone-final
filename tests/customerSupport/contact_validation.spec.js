// import { test, expect } from '@playwright/test';
// import { CustomerSupportPage } from '../../pages/CustomerSupportPage';

// test.describe('Contact Validation Tests', () => {

//     let supportPage;

//     test.beforeEach(async ({ page }) => {

//         supportPage = new CustomerSupportPage(page);

//         await page.goto('https://demowebshop.tricentis.com/contactus');
//     });

//     test('TC_CS_VAL_001 - Verify Name Field Enabled', async () => {

//         await expect(supportPage.nameField)
//             .toBeEnabled();
//     });

//     test('TC_CS_VAL_002 - Verify Email Field Enabled', async () => {

//         await expect(supportPage.emailField)
//             .toBeEnabled();
//     });

//     test('TC_CS_VAL_003 - Verify Enquiry Field Enabled', async () => {

//         await expect(supportPage.enquiryField)
//             .toBeEnabled();
//     });

//     test('TC_CS_VAL_004 - Verify Submit Button Enabled', async () => {

//         await expect(supportPage.submitButton)
//             .toBeEnabled();
//     });

//     test('TC_CS_VAL_005 - Verify Page Title Visible', async () => {

//         await expect(supportPage.pageTitle)
//             .toBeVisible();
//     });

//     test('TC_CS_VAL_006 - Verify Contact Page URL', async ({ page }) => {

//         await expect(page).toHaveURL(/contactus/);
//     });

// });




import { test, expect } from '../../fixtures/baseFixture';

test.describe('Contact Validation Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://demowebshop.tricentis.com/contactus'
        );

    });

    test('TC_CS_VAL_001 - Verify Name Field Enabled',
        async ({ customerSupportPage }) => {

            await expect(
                customerSupportPage.nameField
            ).toBeEnabled();

        });

    test('TC_CS_VAL_002 - Verify Email Field Enabled',
        async ({ customerSupportPage }) => {

            await expect(
                customerSupportPage.emailField
            ).toBeEnabled();

        });

    test('TC_CS_VAL_003 - Verify Enquiry Field Enabled',
        async ({ customerSupportPage }) => {

            await expect(
                customerSupportPage.enquiryField
            ).toBeEnabled();

        });

    test('TC_CS_VAL_004 - Verify Submit Button Enabled',
        async ({ customerSupportPage }) => {

            await expect(
                customerSupportPage.submitButton
            ).toBeEnabled();

        });

    test('TC_CS_VAL_005 - Verify Page Title Visible',
        async ({ customerSupportPage }) => {

            await expect(
                customerSupportPage.pageTitle
            ).toBeVisible();

        });

    test('TC_CS_VAL_006 - Verify Contact Page URL',
        async ({ page }) => {

            await expect(page)
                .toHaveURL(/contactus/);

        });

});