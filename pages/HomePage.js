import { expect } from '@playwright/test';

export class HomePage {
    constructor(page) {
        this.page = page;

        this.logo = page.locator('.header-logo');
        this.footer = page.locator('.footer');


        this.registerLink = page.locator('.ico-register');
        this.loginLink = page.locator('.ico-login');
        this.cartLink = page.locator('.cart-label');
        this.wishlistLink = page.locator('.wishlist-label');

        
        this.booksCategory =
    page.getByRole('link', { name: 'Books' }).first();

this.computersCategory =
    page.getByRole('link', { name: 'Computers' }).first();

this.electronicsCategory =
    page.getByRole('link', { name: 'Electronics' }).first();

this.cartLink =
    page.locator('.header-links .ico-cart').first();

this.wishlistLink =
    page.locator('.header-links .ico-wishlist').first();


this.featuredProductsSection = page.locator('.product-grid');
this.productCards = page.locator('.product-item');
this.productNames = page.locator('.product-title');
this.productPrices = page.locator('.prices');
this.productImages = page.locator('.picture img');
    }

    async goto() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async clickRegister() {
        await this.registerLink.click();
    }

    async clickLogin() {
        await this.loginLink.click();
    }

    async clickCart() {
        await this.cartLink.click();
    }

    async clickWishlist() {
        await this.wishlistLink.click();
    }

   async openBooksCategory() {
    await this.booksCategory.click();
}

async openComputersCategory() {
    await this.computersCategory.click();
}

async openElectronicsCategory() {
    await this.electronicsCategory.click();
}
async getProductCount() {
    return await this.productCards.count();
}

async getFirstProductName() {
    return await this.productNames.first().textContent();
}
}