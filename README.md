# Quality Sentinels - Style Mate Online Store Testing

## Project Overview
The **Quality Sentinels** project involves testing the **Style Mate Online Store** website to ensure its functionality, usability, performance, and UI responsiveness. This repository contains the details of the test plan, the testing approach, and the results for the testing process.

### Website Link
[Style Mate Online Store](https://luni-interface-029.vercel.app/)

## Test Plan

### Prepared By: 
Vasanthakumar G

### Start Date: 
December 17, 2024

### End Date:
December 21, 2024

### Table of Contents
- [Introduction](#introduction)
- [Objectives](#objectives)
- [Scope](#scope)
- [Testable Features](#testable-features)
- [Testing Approach](#testing-approach)
- [Roles/Responsibilities](#rolesresponsibilities)
- [Test Schedule](#test-schedule)
- [Test Deliverables](#test-deliverables)
- [Entry & Exit Criteria](#entry--exit-criteria)
- [Tools](#tools)
- [Risks and Mitigation Plans](#risks-and-mitigation-plans)
- [Approvals](#approvals)

### Introduction
This document outlines the testing strategies and scope for the **Style Mate Online Store**. Testing ensures the proper functionality, UI/UX, compatibility, and performance for key features such as registration, login, product search, and cart management.

### Objectives
- Ensure all navigation links and features work as intended.
- Verify the functionality of critical features (Login, Product Search, Add to Cart, Checkout, Wishlist, Footer Links, etc.).
- Ensure responsiveness across browsers and devices.
- Validate BDD Gherkin scenarios implemented with Cypress using the POM framework.

### Scope
The test plan covers functional, performance, UI/UX, and usability testing across major browsers (Chrome, Edge) and devices (desktop, mobile). It includes manual and automated testing of core features to ensure user experience consistency and reliability, with manual testing for non-functional aspects.

### Testable Features
- **Registration & Login**: Creating accounts and authenticating users.
- **Search Bar**: Testing the product search functionality.
- **Profile Management**: User profile updates and preferences.
- **Add to Cart**: Adding and removing items from the cart.
- **Checkout**: Completing purchases and payment gateway integration.
- **Wishlist**: Adding products to the Wishlist.
- **Product Categories**: Testing navigation and product display for categories like Home, Shop, Men, Women, Kids, etc.
- **Footer Links**: Testing links like "About Us," "Privacy Policy", etc.

### Testing Approach

#### Testing Types:
- **Functional Testing**: Verify that features (e.g., registration, add to cart) perform as expected.
- **Compatibility Testing**: Test across browsers (Chrome, Edge, Firefox) and devices (desktop, tablet, mobile).
- **Performance Testing**: Measure page load times and responsiveness for critical features.

#### Testing Methodologies:
- **Exploratory Testing**: Testing beyond documented scenarios.
- **Regression Testing**: Validating existing features after bug fixes or new feature additions.

### Roles/Responsibilities
As the sole tester for this project, I was responsible for:
- Creating a comprehensive Test Plan to outline objectives, scope, and strategies.
- Automating test cases using Cypress with the Page Object Model (POM) approach.
- Conducting manual and exploratory testing to ensure functional and compatibility quality.
- Identifying and analyzing bugs through thorough testing and documenting insights.
- Compiling a Test Results Summary to highlight testing outcomes and application quality.

### Test Schedule

| Task                              | Duration                    |
|-----------------------------------|-----------------------------|
| Test Plan Creation & Mind Map     | December 21, 2024           |
| Automation                        | December 21, 2024           |
| Test Scripts & Execution          | December 20-21, 2024        |
| Manual Test cases & Bug Reporting | December 21, 2024           |
| Test Summary / Presentation Report Submission | December 21, 2024 |

### Test Deliverables
| Deliverable                        | Description                                 |
|------------------------------------|---------------------------------------------|
| **Test Plan**                      | Detailed implementation plans and features. |
| **Mind Map**                       | Detailed testing strategy and scope.        |
| **Automation Test Cases & Manual Test** | Test cases for functional and non-functional testing. |
| **Defect Reports**                 | Identified bugs during testing.            |
| **Test Summary**                   | A summary of the entire testing process.    |

### Entry & Exit Criteria

#### Entry Criteria:
- Access to the Style Mate Online Store.
- All features available and functional.

#### Exit Criteria:
- All critical and high-priority bugs fixed.
- All features meet the expected behavior defined in scenarios.

### Tools
1. **Cypress**: For writing and executing automation scripts.
2. **Browser Stack**: For cross-browser and device compatibility testing.
3. **Google Docs & Word Docs**: For creating Test Plan and Test Summary.

### Risks and Mitigation Plans

| Risk                               | Impact                             | Mitigation                                 |
|-----------------------------------|------------------------------------|--------------------------------------------|
| **Unstable website**              | Test execution delays             | Plan testing during stable hours.         |
| **Undefined requirements**        | Confusion and miscommunication    | Clarify requirements before testing.      |

### Approvals
The client will approve the following documents before moving forward with testing:
- Test Plan
- Summary Report
- Mind Map
- Test Cases
- Bug Report

---

## Test Summary Report

### Prepared By: 
Vasanthakumar G

### Date: 
December 21, 2024

### Version: 
1.0

### Reviewed By: 
Self-Reviewed

---

### 1. Objective
The objective of this testing cycle was to ensure the functionality, usability, performance, and UI responsiveness of the **Style Mate Online Store** website.

### 2. Scope of Testing
- **Automation Testing (POM Approach)**: Core functionalities like login, product search, cart operations, and checkout were tested.
- **Manual Testing (Non-Functional)**: Performance, usability, and UI responsiveness testing across desktop, mobile, and tablet devices.

### 3. Test Results Summary

| Category          | Total Test Cases | Passed | Failed |
|-------------------|------------------|--------|--------|
| **Automation Testing** | 75%               | 25%    |
| **Manual Testing**    | 11 test cases    | 13     | 6      |

### 4. Performance Metrics

| Test Type       | Metric                                | Result         | Acceptable Limit |
|-----------------|---------------------------------------|----------------|------------------|
| **Load Testing** | Homepage Load Time (Normal Load)     | 3 seconds      | < 3 seconds      |
| **Stress Testing** | Peak Load Handling (5000 Users)     | System slowed down | No performance drop |
| **Response Time** | Adding Product to Cart              | 1.8 seconds    | < 2 seconds      |

### 5. Test Coverage
- **Automation Testing Coverage**: Comprehensive functional testing using POM scripts.
- **Manual Testing Coverage**: Focused on non-functional aspects such as performance, usability, and UI responsiveness.

### 6. Risk Assessment

| Risk                    | Impact                               | Mitigation                             |
|-------------------------|--------------------------------------|----------------------------------------|
| **Missing Wishlist and Cart buttons** | Negative user experience  | Fix missing UI elements for all products. |
| **Mobile layout issues** | Poor mobile user experience        | Ensure website responsiveness across devices. |
| **Slow homepage load time** | Increased bounce rates            | Optimize assets and enable caching.   |
| **Missing Help and Support page** | Reduced customer satisfaction | Add and verify the functionality of Help pages. |

### 7. Recommendations
1. Fix critical bugs related to homepage, cart, footer links, and checkout functionalities.
2. Optimize homepage load time for a smoother user experience.
3. Ensure mobile responsiveness across all key workflows.

### 8. Conclusion
The **Style Mate Online Store** website was thoroughly tested, identifying critical bugs that need immediate attention to improve user experience and performance. Further testing, including regression and extended scope tests, is recommended.

### 9. Next Steps
- **Bug Fixes**: Address the critical bugs related to functionality, performance, and compatibility.

---

## Final Notes
This test summary report highlights the effective use of Cypress POM for automation and manual testing for non-functional validation, ensuring a detailed quality assessment of the **Style Mate Online Store**.
