
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