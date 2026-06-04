// export class CheckoutPage {

//     constructor(page) {

//         this.page = page;

//         this.cartLink =
//             page.locator('.header-links .ico-cart').first();

//         this.termsCheckbox =
//             page.locator('#termsofservice');

//         this.checkoutButton =
//             page.locator('#checkout');

//         this.checkoutAsGuestButton =
//             page.locator('.checkout-as-guest-button');

//         this.loginButton =
//             page.locator('.button-1.login-button');

//         this.registerButton =
//             page.locator('.button-1.register-button');

//         this.pageTitle =
//             page.locator('.page-title');
//     }

//     async openCart() {
//         await this.cartLink.click();
//     }

//     async acceptTerms() {
//         await this.termsCheckbox.check();
//     }

//     async clickCheckout() {
//         await this.checkoutButton.click();
//     }
// }


export class CheckoutPage {

    constructor(page) {

        this.page = page;

        // Header
        this.cartLink =
            page.locator('.header-links .ico-cart').first();

        // Checkout
        this.termsCheckbox =
            page.locator('#termsofservice');

        this.checkoutButton =
            page.locator('#checkout');

        this.checkoutAsGuestButton =
            page.locator('.checkout-as-guest-button');

        // Login Page
        this.loginButton =
            page.locator('.button-1.login-button');

        this.registerButton =
            page.locator('.button-1.register-button');

        this.emailField =
            page.locator('#Email');

        this.passwordField =
            page.locator('#Password');

        // Common
        this.pageTitle =
            page.locator('.page-title');

        this.body =
            page.locator('body');
    }

    async openCartPage() {
        await this.page.goto(
            'https://demowebshop.tricentis.com/cart'
        );
    }

    async openLoginPage() {
        await this.page.goto(
            'https://demowebshop.tricentis.com/login'
        );
    }

    async openCart() {
        await this.cartLink.click();
    }

    async acceptTerms() {
        await this.termsCheckbox.check();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}