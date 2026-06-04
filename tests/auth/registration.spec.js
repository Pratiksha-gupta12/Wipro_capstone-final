// import { test, expect } from '@playwright/test';
// import { AuthPage } from '../../pages/AuthPage';

// test.describe('Registration Tests', () => {
//     let authPage;

//     test.beforeEach(async ({ page }) => {
//         authPage = new AuthPage(page);
//         await authPage.goto();
//         await authPage.openRegisterPage();
//     });

//     test('TC_AUTH_001 - Verify Successful User Registration', async ({ page }) => {
//         const uniqueEmail = `user${Date.now()}@gmail.com`;

//         const user = {
//             firstName: 'Pratiksha',
//             lastName: 'Gupta',
//             email: uniqueEmail,
//             password: 'Test@123',
//             confirmPassword: 'Test@123'
//         };

//         await authPage.registerUser(user);

//         await expect(page.locator('.result'))
//             .toHaveText('Your registration completed');
//     });

//     test('TC_AUTH_002 - Verify Registration With Existing Email', async ({ page }) => {

//         const existingUser = {
//             firstName: 'Pratiksha',
//             lastName: 'Gupta',
//             email: 'existinguser@gmail.com', // Replace with a real registered email
//             password: 'Test@123',
//             confirmPassword: 'Test@123'
//         };

//         await authPage.registerUser(existingUser);

//         await expect(page.locator('.validation-summary-errors'))
//             .toContainText('The specified email already exists');
//     });

//     test('TC_AUTH_003 - Verify Mandatory Field Validation', async ({ page }) => {

//         await authPage.registerButton.click();

//         await expect(page.locator('span[for="FirstName"]'))
//             .toHaveText('First name is required.');

//         await expect(page.locator('span[for="LastName"]'))
//             .toHaveText('Last name is required.');

//         await expect(page.locator('span[for="Email"]'))
//             .toHaveText('Email is required.');

//         await expect(page.locator('span[for="Password"]'))
//             .toHaveText('Password is required.');
//     });

//     test('TC_AUTH_004 - Verify Invalid Email Format', async ({ page }) => {

//         await authPage.genderMale.check();
//         await authPage.firstName.fill('Pratiksha');
//         await authPage.lastName.fill('Gupta');
//         await authPage.email.fill('invalidemail');
//         await authPage.password.fill('Test@123');
//         await authPage.confirmPassword.fill('Test@123');

//         await authPage.registerButton.click();

//         await expect(page.locator('span[for="Email"]'))
//             .toHaveText('Wrong email');
//     });

//     test('TC_AUTH_005 - Verify Password Mismatch Validation', async ({ page }) => {

//         await authPage.genderMale.check();
//         await authPage.firstName.fill('Pratiksha');
//         await authPage.lastName.fill('Gupta');
//         await authPage.email.fill(`user${Date.now()}@gmail.com`);
//         await authPage.password.fill('Test@123');
//         await authPage.confirmPassword.fill('Test@456');

//         await authPage.registerButton.click();

//         await expect(page.locator('span[for="ConfirmPassword"]'))
//             .toContainText('The password and confirmation password do not match');
//     });

// });



import { test, expect } from '../../fixtures/baseFixture';

test.describe('Registration Tests', () => {

    test.beforeEach(async ({ authPage }) => {

        await authPage.goto();
        await authPage.openRegisterPage();

    });

    test('TC_AUTH_001 - Verify Successful User Registration',
        async ({ page, authPage }) => {

            const uniqueEmail = `user${Date.now()}@gmail.com`;

            const user = {
                firstName: 'Pratiksha',
                lastName: 'Gupta',
                email: uniqueEmail,
                password: 'Test@123',
                confirmPassword: 'Test@123'
            };

            await authPage.registerUser(user);

            await expect(
                page.locator('.result')
            ).toHaveText(
                'Your registration completed'
            );

        });

    test('TC_AUTH_002 - Verify Registration With Existing Email',
        async ({ page, authPage }) => {

            const existingUser = {
                firstName: 'Pratiksha',
                lastName: 'Gupta',
                email: 'existinguser@gmail.com',
                password: 'Test@123',
                confirmPassword: 'Test@123'
            };

            await authPage.registerUser(existingUser);

            await expect(
                page.locator('.validation-summary-errors')
            ).toContainText(
                'The specified email already exists'
            );

        });

    test('TC_AUTH_003 - Verify Mandatory Field Validation',
        async ({ page, authPage }) => {

            await authPage.registerButton.click();

            await expect(
                page.locator('span[for="FirstName"]')
            ).toHaveText(
                'First name is required.'
            );

            await expect(
                page.locator('span[for="LastName"]')
            ).toHaveText(
                'Last name is required.'
            );

            await expect(
                page.locator('span[for="Email"]')
            ).toHaveText(
                'Email is required.'
            );

            await expect(
                page.locator('span[for="Password"]')
            ).toHaveText(
                'Password is required.'
            );

        });

    test('TC_AUTH_004 - Verify Invalid Email Format',
        async ({ page, authPage }) => {

            await authPage.genderMale.check();
            await authPage.firstName.fill('Pratiksha');
            await authPage.lastName.fill('Gupta');
            await authPage.email.fill('invalidemail');
            await authPage.password.fill('Test@123');
            await authPage.confirmPassword.fill('Test@123');

            await authPage.registerButton.click();

            await expect(
                page.locator('span[for="Email"]')
            ).toHaveText(
                'Wrong email'
            );

        });

    test('TC_AUTH_005 - Verify Password Mismatch Validation',
        async ({ page, authPage }) => {

            await authPage.genderMale.check();
            await authPage.firstName.fill('Pratiksha');
            await authPage.lastName.fill('Gupta');
            await authPage.email.fill(
                `user${Date.now()}@gmail.com`
            );
            await authPage.password.fill('Test@123');
            await authPage.confirmPassword.fill('Test@456');

            await authPage.registerButton.click();

            await expect(
                page.locator('span[for="ConfirmPassword"]')
            ).toContainText(
                'The password and confirmation password do not match'
            );

        });

});