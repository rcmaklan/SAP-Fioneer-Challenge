import { test, expect } from '@playwright/test';
import { SAPFioneerPage } from './pageObjects/SAPFioneerPage';

test('Test 2: go to "Finance & ESG" bookmark', async ({ page }) => {
    const sapFioneerPage = new SAPFioneerPage(page);
    await sapFioneerPage.navigateToHomePage();

    // Step 2: Go to "Finance & ESG" bookmark
    await page.waitForSelector('//*[contains(text(), "Finance & ESG")]');
    await page.click('//*[contains(text(), "Finance & ESG")]');

    // Step 3: Click on ESG KPI Engine
    await page.waitForSelector('//*[contains(text(), "ESG KPI Engine")]');
    await page.click('//*[contains(text(), "ESG KPI Engine")]');

    // Step 4: Verify user is in the correct page
    const expectedUrl = 'https://www.sapfioneer.com/finance-esg/esg-kpi-engine/';
    expect(page.url()).toBe(expectedUrl);
});
