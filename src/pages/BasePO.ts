import { Page } from '@playwright/test';
import Logger from '../utils/Logger';
import CONFIG from '../utils/Config';

/**
 * @Abstract
 * @class Page
 */
abstract class BasePage {
  public page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * 
   * @param url 
   */
  async navigate(url: string): Promise<void> {
    try {
      await this.page.goto(url, { timeout: CONFIG.TIMEOUT });
      await this.page.waitForLoadState();
    } catch (error) {
      Logger.error(error)
    }

  }

  async getDocumentHeight(): Promise<number> {
    return await this.page.evaluate(() => {
      return document.body.scrollHeight;
    });
  }

  async scrollWithHeight(): Promise<void> {
    await this.page.evaluate(() => {
      return window.scrollTo(0, document.body.scrollHeight);
    });
  }

  async scrollToLoadAllPage(): Promise<void> {
    let index = 0;
    while (index === 0) {
      const heightBeforeScroll = await this.getDocumentHeight();
      await this.scrollWithHeight();
      await this.page.waitForTimeout(1000);
      const heightAfterScroll = await this.getDocumentHeight();
      if (heightBeforeScroll === heightAfterScroll) {
        index = 1;
      }
    }
    await this.page.waitForLoadState();
  }
}

export default BasePage;
