import { Page } from '@playwright/test';

export class SAPFioneerPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto('https://www.sapfioneer.com/');
    }

    async clickGetInTouchButton() {
        await this.page.locator('#masthead').getByRole('link', { name: 'Get in touch' }).click();
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
