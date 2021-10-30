# playwright-automation
Automation test framework for website and running with browser support chromium engine. Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests.

### Technical
* [Playwright] - Library automation for NodeJS
* [Jest] - Test runner tool of NodeJS

### Installation
Pull the code via git command to your local:
```
git clone git@github.com:shopback/shopback-automation-test.git
```
or
```
git clone https://github.com/shopback/shopback-automation-test.git
```
Ensure NodeJS and NPM has been installed
```
node -v
```
Install dependencies
```
npm i
```
### Config
Config environment variables in ```./src/resource/Env.ts```
Example:
```
SG: {
    WESTEROS_URL: 'sample_url.com',
    WESTEROS_EMAIL: 'sample_email@gmail.com',
    WESTEROS_PASSWORD: 'sample_password',
    NEEDLE_URL: 'sample_url.com',
    NEEDLE_EMAIL: 'sample_email@gmail.com',
    NEEDLE_PASSWORD: 'sample_password',
    NEEDLE_SECRET_KEY: 'sample_key',
    GATEWAY_URL: 'sample_password',
    GATEWAY_INTERNAL_KEY: 'sample_key'
  }
```

### Running
#### Environment variables
| Variable    | Available Options           | Default Value |
| ------------| --------------------------- | ------------- |
| ENV         | SG, VN, TW ...              |      SG       |
| HEADLESS    | true, false                 |     false     |

#### Run all test scripts
```
ENV=Environment npm test 
```
Example:
```
ENV=SG npm test
```

#### Run specify test scripts
```
ENV=Environment npm test test_path
```
Example:
```
ENV=SG npm test ./src/test/smoke/homepage.test.ts
```

### Reports
Currently we using [Allure] for visualize the test report, to run report please follow script below:
```
npm run report
```




[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [Playwright]: <https://playwright.dev/>
   [Jest]: <https://jestjs.io/>
   [Allure]: <https://docs.qameta.io/allure/>