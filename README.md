# Playwright API Tests Template

This project provides a template for API testing using [Playwright](https://playwright.dev/) with TypeScript.

## Features
- API endpoint testing with Playwright
- Example login test (`tests/api/login.spec.ts`)
- Docker support for running API server and tests
- Azure Pipelines configuration for CI/CD

## Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (optional, for containerized runs)

## Getting Started

### 1. Install Dependencies
```powershell
npm install
```

### 2. Run API Server (Locally)
```powershell
node api-server.js
```

### 3. Run Tests
```powershell
npx playwright test
```

### 4. Run Tests in Docker
Build and run the API server and tests using Docker Compose:
```powershell
docker-compose up --build
```

### 5. Azure Pipelines
See `azure-pipelines.yml` for CI/CD setup. Configure your pipeline in Azure DevOps to automate tests.

## Project Structure
```
api-server.js           # Example API server
playwright.config.ts    # Playwright configuration
Dockerfile.api          # Dockerfile for API server
Dockerfile.tests        # Dockerfile for tests
app/                    # (Optional) Application code
tests/api/login.spec.ts # Example API test
```

## Writing Tests
- Place your API tests in the `tests/api/` directory.
- Use Playwright's `request` fixture for HTTP requests.
- Example test: `login.spec.ts` checks login endpoint returns a token.

## Useful Commands
- Run all tests: `npx playwright test`
- Run a specific test: `npx playwright test tests/api/login.spec.ts`
- View test report: `npx playwright show-report`

## Resources
- [Playwright Docs](https://playwright.dev/docs/api-testing)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## License
MIT
