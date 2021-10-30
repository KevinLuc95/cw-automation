import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    globalSetup: './globalSetup.ts',
    projects: [
        {
            name: 'Web Automation',
            use: {
                browserName: 'chromium',
                screenshot: 'only-on-failure',
                headless: true,
            },

        },
    ],
    timeout: 300000,
    retries: 1,
    workers: 1,
    reporter: [
        ['list'],
        ['experimental-allure-playwright']
    ],
};

export default config;