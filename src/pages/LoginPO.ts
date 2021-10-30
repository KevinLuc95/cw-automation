/* eslint-disable no-undef */
import CONFIG from '../utils/Config';
import { Locator } from 'playwright';
import { Page } from '@playwright/test';
import BasePage from './BasePO';
import Logger from '../utils/Logger';

/**
 * @class LoginPage representing the LoginPage's elements interations
 * @extends {BasePage}
 */
export default class LoginPage extends BasePage {

  /**
   * Create the Login Page 
   * @param {Page} page - playwright browser's page
   * See {@link https://playwright.dev/docs/api/class-page}
   */
  constructor(page: Page) {
    super(page);
  }

  /**
   * Get email button locator
   * @returns {Locator} Locator for 'emailButton' element
   */
  private emailError(): Locator {
    return this.page.locator('#lblEmailErr')
  }

  /**
 * Get email button locator
 * @returns {Locator} Locator for 'emailButton' element
 */
  private passwordError(): Locator {
    return this.page.locator('#lblPasswordErr')
  }

  /**
   * Get email input locator
   * @returns {Locator} Locator for 'EmailInput' element
   */
  private emailInput(): Locator {
    return this.page.locator('#txtEmail')
  }

  /**
   * Get password input locator
   * @returns {Locator} Locator for 'PasswordInput' element
   */
  private passwordInput(): Locator {
    return this.page.locator('#txtPassword')
  }

  /**
   * Get submit button locator
   * @returns {Locator} Locator for 'SubmitButton' element
   */
  private submitButton(): Locator {
    return this.page.locator('#btnLogin')
  }


  /**
   * Navigate to login page in Westeros
   */
  public async navigateToLoginPage() {
    try {
      const LOGIN_URL = CONFIG.DOMAIN + '/login';
      Logger.info('Navigate To Login Page ' + LOGIN_URL);
      await this.navigate(LOGIN_URL);
    } catch (error) {
      Logger.error(error);
      throw Error(error);
    }
    return this;
  }

  /**
   * Input user's email to textbox
   * @param {String} email - user's email 
   */
  public async inputEmail(email: string): Promise<void> {
    try {
      Logger.info('Input Email: ' + email);
      await this.emailInput().fill(email);
    } catch (error) {
      Logger.error(error);
      throw Error(error);
    }
  }

  /**
   * Input user's password to textbox
   * @param {string} password - user's password 
   */
  public async inputPassword(password: string): Promise<void> {
    try {
      Logger.info('Input Password: ' + password);
      await this.passwordInput().fill(password)
    } catch (error) {
      Logger.error(error);
      throw Error(error);
    }
  }

  /**
   * Click on submit button in login form and wait 2s
   */
  public async clickSubmitBtn(): Promise<void> {
    try {
      Logger.info('Click on Submit Button');
      await this.submitButton().click();
    } catch (error) {
      Logger.error(error);
      throw Error(error);
    }
  }

  public async getEmailErrorMessage(): Promise<string> {
    try {
      Logger.info('get email error message');
      const errorMessage = await this.emailError().textContent()
      return errorMessage
    } catch (error) {
      Logger.error(error);
      throw Error(error);
    }
  }

  public async getPasswordErrorMessage(): Promise<string> {
    try {
      Logger.info('get email error message');
      const errorMessage = await this.passwordError().textContent()
      return errorMessage
    } catch (error) {
      Logger.error(error);
      throw Error(error);
    }
  }
}