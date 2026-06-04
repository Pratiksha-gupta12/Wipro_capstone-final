export class CustomerSupportPage {

    constructor(page) {

        this.page = page;

        this.contactUsLink =
            page.getByRole('link', { name: 'Contact us' }).first();

        this.nameField =
            page.locator('#FullName');

        this.emailField =
            page.locator('#Email');

        this.enquiryField =
            page.locator('#Enquiry');

        this.submitButton =
            page.locator('input[value="Submit"]');

        this.successMessage =
            page.locator('.result');

        this.pageTitle =
            page.locator('.page-title');
    }

    async openContactUs() {
        await this.contactUsLink.click();
    }

    async submitEnquiry(name, email, enquiry) {

        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.enquiryField.fill(enquiry);

        await this.submitButton.click();
    }
}