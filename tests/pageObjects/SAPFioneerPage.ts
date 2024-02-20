import { Page, expect } from '@playwright/test';

export class SAPFioneerPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto('https://www.sapfioneer.com/');
    }

    async verifyButtonColor(buttonSelector: string, buttonText: string) {
        const button = await this.page.$(buttonSelector);
        if (button) {
            const buttonTextValue = await button.innerText();
            expect(buttonTextValue).toBe(buttonText);
            const color = await button.evaluate((element) =>
                getComputedStyle(element).getPropertyValue('background-color')
            );
            console.log(color);
            expect(color).toBe('rgb(255, 212, 60)'); // Use RGB format for comparison
        } else {
            console.error(`${buttonText} button not found.`);
        }
    }

    async clickGetInTouchButton() {
        await this.page.locator('#masthead').getByRole('link', { name: 'Get in touch' }).click();
    }

    async navigateToBookmark(bookmarkText: string) {
        await this.page.waitForSelector(`//*[contains(text(), "${bookmarkText}")]`);
        await this.page.click(`//*[contains(text(), "${bookmarkText}")]`);
    }

    async getPageTitle() {
        return await this.page.title();
    }

    async acceptCookies() {
        await this.page.waitForSelector('.button.primary.flatsome-cookies__accept-btn', { state: 'visible' });
        await this.page.click('.button.primary.flatsome-cookies__accept-btn');
    }

    async fillWorkEmailField(value: string) {
        const frame = await this.page.frameLocator('iframe[title="Form 0"]');
        const workEmailField = await frame.getByLabel('Work email*');
        await workEmailField.fill(value);
    }

    async waitForValidationMessage(text: string): Promise<boolean> {
        const frame = await this.page.frameLocator('iframe[title="Form 0"]');
        const validationMessageLocator = frame.locator(`//label[contains(text(), "${text}")]`);
        const validationMessageElement = await validationMessageLocator.elementHandle();

        if (validationMessageElement) {
            return await validationMessageElement.isVisible();
        } else {
            return false;
        }
    }

}
