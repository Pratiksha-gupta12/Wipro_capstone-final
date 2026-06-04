// import { expect } from '@playwright/test';

// export class CartPage {
//     constructor(page) {
//         this.page = page;

//         // Product Page
//         this.addToCartButton = page.locator('input[value="Add to cart"]');

//         // Notifications
//         this.successNotification = page.locator('.bar-notification.success');

//         // Header
//         this.shoppingCartLink = page.locator('.cart-label');
//         this.cartQuantity = page.locator('.cart-qty');

//         // Cart Page
//         this.cartTable = page.locator('.cart');
//         this.cartRows = page.locator('.cart-item-row');

//         this.removeCheckbox = page.locator('input[name="removefromcart"]');
//         this.updateCartButton = page.locator('input[name="updatecart"]');

//         this.quantityInput = page.locator('.qty-input');

//         this.productName = page.locator('.product-name');

//         this.subTotal = page.locator('.product-subtotal');

//         this.termsCheckbox = page.locator('#termsofservice');

//         this.checkoutButton = page.locator('#checkout');

//         this.continueShoppingButton =
//             page.locator('input[value="Continue shopping"]');
//     }

//     async openBookProduct() {
//         await this.page.locator('a:has-text("Computing and Internet")').click();
//     }

//     async addProductToCart() {
//         await this.addToCartButton.click();
//     }

//     async verifySuccessMessage() {
//         await expect(this.successNotification).toBeVisible();
//     }

//     async openCart() {
//         await this.shoppingCartLink.click();
//     }

//     async getCartCount() {
//         const text = await this.cartQuantity.textContent();
//         return text;
//     }

//     async getCartItemCount() {
//         return await this.cartRows.count();
//     }

//     async removeProduct() {
//         await this.removeCheckbox.check();
//         await this.updateCartButton.click();
//     }

//     async updateQuantity(quantity) {
//         await this.quantityInput.clear();
//         await this.quantityInput.fill(quantity);
//         await this.updateCartButton.click();
//     }

//     async getQuantity() {
//         return await this.quantityInput.inputValue();
//     }

//     async getProductName() {
//         return await this.productName.textContent();
//     }

//     async getSubTotal() {
//         return await this.subTotal.textContent();
//     }

//     async acceptTermsAndConditions() {
//         await this.termsCheckbox.check();
//     }

//     async proceedToCheckout() {
//         await this.checkoutButton.click();
//     }

//     async continueShopping() {
//         if (await this.continueShoppingButton.isVisible()) {
//             await this.continueShoppingButton.click();
//         }
//     }
// }




import { expect } from '@playwright/test';

export class CartPage {

    constructor(page) {

        this.page = page;

        // Header
        this.cartLink =
            page.locator('.header-links .ico-cart');

        this.cartQty =
            page.locator('.cart-qty').first();

        // Product Page
        this.addToCartButton =
            page.locator('input[value="Add to cart"]');

        // Notifications
        this.successNotification =
            page.locator('.bar-notification.success');

        // Cart Page
        this.pageTitle =
            page.locator('.page-title');

        this.shoppingCartPage =
            page.locator('.shopping-cart-page');

        this.emptyCartMessage =
            page.locator('.order-summary-content');

        this.cartTable =
            page.locator('.cart');

        this.cartRows =
            page.locator('.cart-item-row');

        this.removeCheckbox =
            page.locator('input[name="removefromcart"]');

        this.updateCartButton =
            page.locator('input[name="updatecart"]');

        this.quantityInput =
            page.locator('.qty-input');

        this.productName =
            page.locator('.product-name');

        this.subTotal =
            page.locator('.product-subtotal');

        this.termsCheckbox =
            page.locator('#termsofservice');

        this.checkoutButton =
            page.locator('#checkout');

        this.continueShoppingButton =
            page.locator('input[value="Continue shopping"]');
    }

    async openBookProduct() {
        await this.page
            .locator('.product-title a')
            .first()
            .click();
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async verifySuccessMessage() {
        await expect(
            this.successNotification
        ).toBeVisible();
    }

    async openCart() {
        await this.cartLink.click();
    }

    async getCartCount() {
        return await this.cartQty.textContent();
    }

    async getCartItemCount() {
        return await this.cartRows.count();
    }

    async removeProduct() {
        await this.removeCheckbox.check();
        await this.updateCartButton.click();
    }

    async updateQuantity(quantity) {
        await this.quantityInput.clear();
        await this.quantityInput.fill(quantity);
        await this.updateCartButton.click();
    }

    async getQuantity() {
        return await this.quantityInput.inputValue();
    }

    async getProductName() {
        return await this.productName.textContent();
    }

    async getSubTotal() {
        return await this.subTotal.textContent();
    }

    async acceptTermsAndConditions() {
        await this.termsCheckbox.check();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    async continueShopping() {
        if (await this.continueShoppingButton.isVisible()) {
            await this.continueShoppingButton.click();
        }
    }
}