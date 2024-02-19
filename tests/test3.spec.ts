import { test, expect } from '@playwright/test';
import { SAPFioneerPage } from './pageObjects/SAPFioneerPage';

test('Test 3', async ({ page }) => {
    const sapFioneerPage = new SAPFioneerPage(page);
    await sapFioneerPage.navigateToHomePage();

    // Closing cookies info window acepting it.
    await sapFioneerPage.acceptCookies();

    // Step 2: Click on Get in touch button
    await sapFioneerPage.clickGetInTouchButton();

    // Step 3: Verify if a user has been redirected to the correct page: SAP Fioneer | Contact | Get in touch!
    const pageTitle = await sapFioneerPage.getPageTitle();
    expect(pageTitle).toBe('SAP Fioneer | Contact | Get in touch!');

    // Step 4: In contact form, for Work email field type incorrect email value e.g. 342323
    await sapFioneerPage.fillWorkEmailField('342323');

    // Step 5: Verify validation message that will appear
    const validationMessageText = 'Email must be formatted correctly.';
    const isValidationMessageVisible = await sapFioneerPage.waitForValidationMessage(validationMessageText);
    expect(isValidationMessageVisible).toBeTruthy();
    
});
