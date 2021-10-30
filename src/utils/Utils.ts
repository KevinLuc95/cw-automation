import { Page } from 'playwright';

const screenshotOnFailure = async (
  page: Page,
  fileName: string,
): Promise<void> => {
  const time = new Date().toISOString();
  const name = fileName.replace(/\s/g, '_');
  await page.screenshot({
    path: `./screenshot/${name}/screenshot-${time}.png`,
    fullPage: true,
  });
};

export default {
  screenshotOnFailure,
};
