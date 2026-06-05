
import { test, expect } from '../../fixtures/baseFixture';

test.describe('Contact Form Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/contactus');
    });

    test('TC_CS_FORM_001 - Submit Valid Enquiry',
        async ({ customerSupportPage }) => {

            await customerSupportPage.submitEnquiry(
                'Pratiksha',
                'test@example.com',
                'This is a test enquiry'
            );

            await expect(
                customerSupportPage.successMessage
            ).toBeVisible();
        });

    test('TC_CS_FORM_002 - Verify Success Message',
        async ({ customerSupportPage }) => {

            await customerSupportPage.submitEnquiry(
                'Pratiksha',
                'test@example.com',
                'This is a test enquiry'
            );

            await expect(
                customerSupportPage.successMessage
            ).toContainText('successfully sent');
        });

    test('TC_CS_FORM_003 - Verify Name Field Accepts Input',
        async ({ customerSupportPage }) => {

            await customerSupportPage.nameField.fill('Pratiksha');

            await expect(
                customerSupportPage.nameField
            ).toHaveValue('Pratiksha');
        });

    test('TC_CS_FORM_004 - Verify Email Field Accepts Input',
        async ({ customerSupportPage }) => {

            await customerSupportPage.emailField.fill('test@example.com');

            await expect(
                customerSupportPage.emailField
            ).toHaveValue('test@example.com');
        });

    test('TC_CS_FORM_005 - Verify Enquiry Field Accepts Input',
        async ({ customerSupportPage }) => {

            await customerSupportPage.enquiryField.fill(
                'Testing enquiry'
            );

            await expect(
                customerSupportPage.enquiryField
            ).toHaveValue('Testing enquiry');
        });

    test('TC_CS_FORM_006 - Verify Submit Button Clickable',
        async ({ customerSupportPage }) => {

            await expect(
                customerSupportPage.submitButton
            ).toBeEnabled();
        });

});