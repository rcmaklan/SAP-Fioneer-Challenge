import { test, expect } from '@playwright/test';

test('Test 2: go to "Finance & ESG" bookmark', async ({ page }) => {
    // Step 1: Go to page SAP Fioneer | World-class software solutions for financial services
    await page.goto('https://www.sapfioneer.com/');

    // Step 2: Go to "Finance & ESG" bookmark
    const financeESGBookmark = await page.waitForSelector('//*[contains(text(), "Finance & ESG")]');
    await financeESGBookmark.click();

    // Step 3: Click on ESG KPI Engine
    const esgKPIEngineLink = await page.waitForSelector('//*[contains(text(), "ESG KPI Engine")]');
    await esgKPIEngineLink.click();

    // Step 4: Verify user is in the correct page
    const expectedUrl = 'https://www.sapfioneer.com/finance-esg/esg-kpi-engine/';
    expect(page.url()).toBe(expectedUrl);
});

