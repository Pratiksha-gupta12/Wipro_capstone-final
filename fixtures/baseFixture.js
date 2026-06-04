import { test as base, expect } from '@playwright/test';

import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage'
import { CheckoutPage } from '../pages/CheckoutPage';;
import { CartPage } from '../pages/CartPage';
import { WishlistPage } from '../pages/WishlistPage';
import { CustomerSupportPage } from '../pages/CustomerSupportPage';

export const test = base.extend({

    authPage: async ({ page }, use) => {
        await use(new AuthPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },

   
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    wishlistPage: async ({ page }, use) => {
        await use(new WishlistPage(page));
    },
   checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
},
customerSupportPage: async ({ page }, use) => {
    await use(new CustomerSupportPage(page));
},

});

export { expect };