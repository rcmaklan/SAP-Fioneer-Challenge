# SAP-Fioneer-Challenge
Three examples of automated tests for the SAP Fioneer Challenge using Playwright.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)

## Introduction

This repository contains a set of automated tests written in the Playwright automation framework using TypeScript for the SAP Fioneer Challenge.

## Installation

To get started with SAP-Fioneer-Challenge, you'll need to have Node.js installed and Visual Studio Code on your machine. See requirements on the [official Playwright page](https://playwright.dev/docs/intro#system-requirements). Follow these steps:


1. **Clone the Repository**: 
    ```bash
    git clone https://github.com/rcmaklan/SAP-Fioneer-Challenge.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd SAP-Fioneer-Challenge
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

    This command will install all the necessary dependencies, including Playwright and other packages specified in the `package.json` file.

## Folder Structure

After cloning the repository, you'll find the following structure in the `tests` folder:

- **specs files**: Contains the test specification files (`*.spec.ts`). You can create additional test files here to extend the test coverage.
  
- **pageObjects folder**: Contains reusable page objects and related methods for interacting with the SAP Fioneer web page. For example, you'll find `SAPFioneerPage.ts`, where you can add more common methods for interacting with SAP Fioneer page.


## Usage

1. **Run Tests**:
    ```bash
    npx playwright test
    ```

    This command will execute the automated tests using Playwright.

2. **Customize Test Execution**:

    - **Browser Selection**: Modify the `projects` section in the `playwright.config.ts` file to specify different browsers for testing. To run the tests on specific browsers, uncomment the corresponding sections in the `playwright.config.ts` file. For example, to run the tests on Chromium, uncomment the relevant section as shown below:

        ```typescript
        projects: [
            {
                name: 'chromium',
                use: { ...devices['Desktop Chrome'] },
            },
            // Uncomment the following section to run tests on Chromium
            // {
            //     name: 'firefox',
            //     use: { ...devices['Desktop Firefox'] },
            // },
            // Add additional browser configurations as needed
        ],
        ```

    - **Headless Mode**: Adjust the `headless` option in the `use` section of the `playwright.config.ts` file to specify whether the tests should run in headless mode (true) or non-headless mode (false). Headless mode means that the browser will run without a graphical interface. Set the `headless` option to true or false depending on your preference. For example:

        ```typescript
        use: {
            /* Other configurations */
            headless: true, // Set to true for headless mode, false for non-headless mode
        },
        ```

3. **View Test Reports**:

    After running the tests, a test report in HTML format is generated. You can view the last generated HTML report by running the following command:

    ```bash
    npx playwright show-report
    ```

    This will open the last generated HTML report in your default web browser, allowing you to view detailed test results.


