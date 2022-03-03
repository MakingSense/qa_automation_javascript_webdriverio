# Javascript Framework

[WEBDRIVER I/O](https://webdriver.io/)

WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and stable test suite.

[JASMINE](https://jasmine.github.io/)

Framework to write tests files

## Running locally

#### Requirements:

- [Node](https://nodejs.org/en/) v 12 or higher.

In order to execute the automated tests, follow the next steps

Browser: Chrome

```bash
yarn run test:smoke --baseUrl XXXXXXXXX
```

The --baseUrl is required. It should be provided every time that an execution is launched.

More important cli arguments....

#### `If you want to only run a single suite, you can pass the suite name as cli argument as follows:`

```bash
yarn run test:smoke --baseUrl XXXXXXXXX --suite suiteName1
```

#### `To define two or more suite's name`

```bash
yarn run test:regression --baseUrl XXXXXXXXX --suite suiteName1, suiteName2
```

####  `In some cases, you may wish to only execute a single test or a subset of your suites. With the --spec parameter you can specify which suite should be run`
For example if you only want to run your login test, do:`

```bash
yarn run test:regression --baseUrl XXXXXXXXX --spec ./tests/e2e/specs/permissions/profileManager.permissions.spec.js
```

#### `or run multiple specs at once:`

```bash
yarn run test:e2e:chrome --baseUrl XXXXXXXXX --spec ./tests/e2e/specs/permissions/profileManager.permissions.spec.js, ./tests/e2e/specs/permissions/feedRead.permissions.spec.js
```

## With Docker Locally

Requirements: [Docker](https://www.docker.com/)

Then, you can execute the following command

```bash
docker-compose up smoke
```
```bash
docker-compose up regression
```

## CI

### Triggering Executions
Executions can be configured to run on GitHub when specific activities happen, at a scheduled time, when a label is added to a PR, when it is requested manually or when an event outside of GitHub occurs (webhooks).

### How the results are informed

#### Slack Integration

Every time that a suite is executed, the results are informed in a Slack Channel.


#### Github API Integration

Using the Github REST API results are integrated into the Pull Request.
