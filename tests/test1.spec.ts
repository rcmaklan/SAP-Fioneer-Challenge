// specFiles/Test1.spec.ts
import { test } from '@playwright/test';
import { SAPFioneerPage } from './pageObjects/SAPFioneerPage';

test('Test 1: check the color of a button', async ({ page }) => {
    const sapFioneerPage = new SAPFioneerPage(page);
    await sapFioneerPage.navigateToHomePage();

    // Step 2: Verify Get in touch header button has a yellow color
    await sapFioneerPage.verifyButtonColor('div.header-button > a.button.primary', 'Get in touch');

    // Step 3: Verify Get in touch lower button has a yellow color
    await sapFioneerPage.verifyButtonColor('div.col-inner a.button.primary.lowercase', 'Get in touch');

});
