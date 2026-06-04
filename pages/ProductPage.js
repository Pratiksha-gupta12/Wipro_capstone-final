export class ProductPage {

    constructor(page) {
        this.page = page;

        // Books Page
        this.computingAndInternetLink =
page.locator('.product-title a')
    .filter({ hasText: 'Computing and Internet' })
    .first();

        // Product Details Page
        this.productTitle = page.locator('h1');

this.productPrice = page.locator('.product-price');

this.productImage = page.locator('.gallery img');

this.addToCartButton =
    page.locator('.product-essential .add-to-cart-button');

this.breadcrumb =
page.locator('.breadcrumb');

this.addReviewLink =
    page.getByRole('link', { name: 'Add your review' });
    }

    async navigateToBooks() {
        await this.page.goto('https://demowebshop.tricentis.com/books');
    }

   async openComputingAndInternet() {
    await this.computingAndInternetLink.click();
}

    async getProductTitle() {
        return await this.productTitle.textContent();
    }

    async getProductPrice() {
        return await this.productPrice.textContent();
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async getBreadcrumbText() {
        return await this.breadcrumb.textContent();
    }

    async isProductImageVisible() {
        return await this.productImage.isVisible();
    }

    async isAddToCartButtonVisible() {
        return await this.addToCartButton.isVisible();
    }

    async isDescriptionVisible() {
        return await this.productDescription.isVisible();
    }

    async openReviewSection() {
        await this.addReviewLink.click();
    }
}