import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',

  /* Maximum time one test can run */
  timeout: 30 * 1000,

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if test.only is left in the code */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,

  /* Limit workers on CI */
  workers: process.env.CI ? 1 : undefined,


  /* retries:1,
  
  workers: 1, */

  /* Reporter configuration */
  reporter: [
    ['html'],
    ['allure-playwright'],
    ['list'],
    ['dot']
  ],

  /* Shared settings for all projects */
  use: {
    /* Base URL */
    // baseURL: 'https://yourapplication.com',

    /* Collect trace on first retry */
    trace: 'on-first-retry',

    /* Capture screenshot only when test fails */
    screenshot: 'only-on-failure',

    /* Save video only for failed tests */
    video: 'retain-on-failure',

    /* Default browser window size */
    viewport: {
      width: 1280,
      height: 720,
    },

    /* Ignore SSL certificate issues */
    ignoreHTTPSErrors: true,


    permissions: ['geolocation'],

    /* Run headed mode if required */
    // headless: false,
  },

  /* Run specific tagged tests */
  // grep: /@smoke/,

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    /*{
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    }/*,

    /* Test against mobile viewports. */

    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },

    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */

    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     channel: 'msedge',
    //   },
    // },

    // {
    //   name: 'Google Chrome',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Run your local dev server before starting the tests */

  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});