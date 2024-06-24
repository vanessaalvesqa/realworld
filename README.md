# RealWorld Cypress Project

This project is a test automation suite for the RealWorld application using Cypress.

## Installation

To get started, follow these steps:

1. **Clone the repository and follow the commands:**
   ```bash
   git clone https://github.com/yourusername/realworld-cypress.git
   cd realworld-cypress
   npm install
   npm cache clean --force
   npx cypress cache clear

2.**Running and testing:**
```bash
npx cypress install

### Running the Tests

# Open Cypress Test Runner
npm run cy:open

# Run Cypress Tests in Headless Mode
npm run cy:run

### Generating Reports

# This project uses mochawesome for generating test reports. 
# After running the tests, you can generate an HTML report with the following commands:

# Merge JSON reports and generate HTML report
npm run test:report

# Open the HTML report
# Navigate to the cypress/reports/mochawesome-reports directory.
# Open the merged-report.html file in your browser.










