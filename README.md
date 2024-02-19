# SAP-Fioneer-Challenge
Three examples of automated tests for the SAP Fioneer Challenge using Playwright.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

This repository contains a set of automated tests written in the Playwright automation framework using TypeScript for the SAP Fioneer Challenge.

## Installation

To get started with SAP-Fioneer-Challenge, follow these steps:

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

## Usage

1. **Run Tests**:
    ```bash
    npx playwright test
    ```

    This command will execute the automated tests using Playwright.

2. **Customize Test Execution**:

    - **Browser Selection**: Modify the `projects` section in the `playwright.config.js` file to specify different browsers and devices for testing.
  
    - **Headless Mode**: Adjust the `headless` option in the `use` section of the `playwright.config.js` file to run tests in headless mode or non-headless mode.

3. **View Test Reports**:

    After running the tests, a test report in HTML format is generated. You can view the last generated HTML report by running the following command:

    ```bash
    npx playwright show-report
    ```

    This will open the last generated HTML report in your default web browser, allowing you to view detailed test results.


