/* eslint-disable no-undef */
import { Locator } from 'playwright';
import { Page } from '@playwright/test';
import BasePage from './BasePO';
import Logger from '../utils/Logger';

/**
 * @class LoginPage representing the LoginPage's elements interations
 * @extends {BasePage}
 */
export default class WelcomePage extends BasePage {

  /**
   * Create the Login Page 
   * @param {Page} page - playwright browser's page
   * See {@link https://playwright.dev/docs/api/class-page}
   */
  constructor(page: Page) {
    super(page);
  }

  /**
   * Get login success locator
   * @returns {Locator} Locator for 'loginSuccessfullyMessage' element
   */
  private loginSuccessfullyMessage(): Locator {
    return this.page.locator('#lblLoggedinSuccessfully')
  }

  /**
   * get login successfully message
   */
  public async getLoginSuccessfullyMessage(): Promise<String> {
    try {
      Logger.info('Get login successfully message');
      const successMessage = this.loginSuccessfullyMessage().textContent()
      return successMessage
    } catch (error) {
      Logger.error(error);
      throw Error(error);
    }
  }
}