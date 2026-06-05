import { test, expect } from '../../fixtures/baseFixture';

test.describe('API Testing Module', () => {

    test('TC_API_001 - Verify Get All Products',
        async ({ apiPage }) => {

            const response =
                await apiPage.getAllProducts();

            expect(response.status())
                .toBe(200);

            const body =
                await response.json();

            expect(body.length)
                .toBeGreaterThan(0);

        });

    test('TC_API_002 - Verify Get Single Product',
        async ({ apiPage }) => {

            const response =
                await apiPage.getSingleProduct(1);

            expect(response.status())
                .toBe(200);

            const body =
                await response.json();

            expect(body.id)
                .toBe(1);

            expect(body.title)
                .toBeTruthy();

        });

    test('TC_API_003 - Verify Create Product',
        async ({ apiPage }) => {

            const response =
                await apiPage.createProduct({
                    title: 'Playwright Book',
                    price: 500,
                    description: 'Automation Testing',
                    image: 'https://i.pravatar.cc',
                    category: 'books'
                });

            expect(response.status())
                .toBe(201);

            const body =
                await response.json();

            expect(body.title)
                .toBe('Playwright Book');

        });

    test('TC_API_004 - Verify Delete Product',
        async ({ apiPage }) => {

            const response =
                await apiPage.deleteProduct(1);

            expect(response.status())
                .toBe(200);

        });

});