// specFiles/Test1.spec.ts
import { test, expect } from '@playwright/test';
import { SAPFioneerPage } from './pageObjects/SAPFioneerPage';

test('Test 1: check the color of a button', async ({ page }) => {
    const sapFioneerPage = new SAPFioneerPage(page);
    await sapFioneerPage.navigateToHomePage();

    // Step 2: Verify Get in touch header button has a yellow color
    const headerButton = await page.$('div.header-button > a.button.primary');
    if (headerButton) {
        const buttonText = await headerButton.innerText();
        expect(buttonText).toBe('Get in touch');
        // Get the color of the button
        const colorHeader = await headerButton.evaluate((element) =>
            getComputedStyle(element).getPropertyValue('background-color')
        );
        console.log(colorHeader);
        // Check the color
        expect(colorHeader).toBe('rgb(255, 212, 60)'); // Use RGB format for comparison
    } else {
        console.error("Header button not found.");
    }

    // Step 3: Verify Get in touch lower button has a yellow color
    const lowerButton = await page.$('div.col-inner a.button.primary.lowercase');
    if (lowerButton) {
        const buttonText = await lowerButton.innerText();
        expect(buttonText).toBe('Get in touch');
        // Get the color of the lower button
        const colorLower = await lowerButton.evaluate((element) =>
            getComputedStyle(element).getPropertyValue('background-color')
        );
        console.log(colorLower);
        // Check the color
        expect(colorLower).toBe('rgb(255, 212, 60)'); // Use RGB format for comparison
    } else {
        console.error("Lower button not found.");
    }
});
