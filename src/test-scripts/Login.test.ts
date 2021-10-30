import { test, Page, BrowserContext, expect } from '@playwright/test';
import LoginPO from '../pages/LoginPO';
import User from 'src/modal/User';
import WelcomePO from '../pages/WelcomePO';

let context: BrowserContext
let page: Page;

let validUser = new User("email", "password");
let invalidUser = new User("invalid_email", "password")

test.describe('Login feature', () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext()
    page = await context.newPage()
  });

  test.afterAll(async () => {
    context.close();
  });

  test('Verify that a user can login successfully', async () => {
    const loginSuccessfullyMessage = "You have logged-in successfully!"
    const LoginPage = new LoginPO(page);
    const WelcomePage = new WelcomePO(page)
    LoginPage.navigateToLoginPage()
    LoginPage.inputEmail(validUser.email);
    LoginPage.inputPassword(validUser.password);
    LoginPage.clickSubmitBtn();
    expect(WelcomePage.getLoginSuccessfullyMessage()).toEqual(loginSuccessfullyMessage)
  });

  test('Verify that a user cannot login when entering a wrong email address or password', async () => {
    const errorEmailMessage = "The inputted email or password is not correct."
    const LoginPage = new LoginPO(page);
    LoginPage.navigateToLoginPage()
    LoginPage.inputEmail(invalidUser.email);
    LoginPage.inputPassword(invalidUser.password);
    LoginPage.clickSubmitBtn();
    expect(LoginPage.getEmailErrorMessage()).toEqual(errorEmailMessage)
  });
});