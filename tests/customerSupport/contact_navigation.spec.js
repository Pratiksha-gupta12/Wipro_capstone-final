// import { test, expect } from '@playwright/test';
// import { CustomerSupportPage } from '../../pages/CustomerSupportPage';

// test.describe('Contact Navigation Tests', () => {

//     let supportPage;

//     test.beforeEach(async ({ page }) => {

//         supportPage = new CustomerSupportPage(page);

//         await page.goto('https://demowebshop.tricentis.com/');
//     });

//     test('TC_CS_001 - Open Contact Us Page', async ({ page }) => {

//         await supportPage.openContactUs();

//         await expect(page).toHaveURL(/contactus/);
//     });

//     test('TC_CS_002 - Verify Contact Page Title', async () => {

//         await supportPage.openContactUs();

//         await expect(supportPage.pageTitle)
//             .toContainText('Contact Us');
//     });

//     test('TC_CS_003 - Verify Name Field Visible', async () => {

//         await supportPage.openContactUs();

//         await expect(supportPage.nameField)
//             .toBeVisible();
//     });

//     test('TC_CS_004 - Verify Email Field Visible', async () => {

//         await supportPage.openContactUs();

//         await expect(supportPage.emailField)
//             .toBeVisible();
//     });

//     test('TC_CS_005 - Verify Enquiry Field Visible', async () => {

//         await supportPage.openContactUs();

//         await expect(supportPage.enquiryField)
//             .toBeVisible();
//     });

//     test('TC_CS_006 - Verify Submit Button Visible', async () => {

//         await supportPage.openContactUs();

//         await expect(supportPage.submitButton)
//             .toBeVisible();
//     });

// });




import { test, expect } from '../../fixtures/baseFixture';

test.describe('Contact Navigation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');
    });

    test('TC_CS_001 - Open Contact Us Page',
        async ({ page, customerSupportPage }) => {

            await customerSupportPage.openContactUs();

            await expect(page)
                .toHaveURL(/contactus/);
        });

    test('TC_CS_002 - Verify Contact Page Title',
        async ({ customerSupportPage }) => {

            await customerSupportPage.openContactUs();

            await expect(
                customerSupportPage.pageTitle
            ).toContainText('Contact Us');
        });

    test('TC_CS_003 - Verify Name Field Visible',
        async ({ customerSupportPage }) => {

            await customerSupportPage.openContactUs();

            await expect(
                customerSupportPage.nameField
            ).toBeVisible();
        });

    test('TC_CS_004 - Verify Email Field Visible',
        async ({ customerSupportPage }) => {

            await customerSupportPage.openContactUs();

            await expect(
                customerSupportPage.emailField
            ).toBeVisible();
        });

    test('TC_CS_005 - Verify Enquiry Field Visible',
        async ({ customerSupportPage }) => {

            await customerSupportPage.openContactUs();

            await expect(
                customerSupportPage.enquiryField
            ).toBeVisible();
        });

    test('TC_CS_006 - Verify Submit Button Visible',
        async ({ customerSupportPage }) => {

            await customerSupportPage.openContactUs();

            await expect(
                customerSupportPage.submitButton
            ).toBeVisible();
        });

});