export class WishlistPage {

    constructor(page) {

        this.page = page;

        this.booksCategory =
            page.getByRole('link', { name: 'Books' }).first();

        
        this.firstProduct =
    page.locator('a[href="/computing-and-internet"]').last();

   this.addToWishlistButton =
    page.locator('input[value="Add to wishlist"]');

        this.wishlistLink =
            page.locator('.header-links .ico-wishlist').first();

        this.pageTitle =
            page.locator('.page-title');

        this.wishlistItems =
            page.locator('.cart-item-row');

        this.emptyWishlistMessage =
            page.locator('.wishlist-content');

        this.successNotification =
            page.locator('.bar-notification.success');
    }

    async navigateToHome() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async navigateToBooks() {
        await this.booksCategory.click();
    }

async openFirstProduct() {

    await this.firstProduct.click();

    await this.page.waitForLoadState('networkidle');
}

async addToWishlist() {

    await this.addToWishlistButton.waitFor({
        state: 'visible',
        timeout: 10000
    });

    await this.addToWishlistButton.click();
}

    async openWishlist() {
        await this.wishlistLink.click();
    }

    async getWishlistItemCount() {
        return await this.wishlistItems.count();
    }

    async getPageTitle() {
        return await this.pageTitle.textContent();
    }
}