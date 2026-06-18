# Portfolio Backend

Portfolio Backend is a NestJS API gateway for a portfolio platform. It orchestrates three AI-oriented features: code scoring, coding problem generation, and a chat-style assistant. The service exposes a small, validation-safe HTTP surface and publishes Swagger documentation for local exploration.

## System Overview

The application is structured as a modular NestJS backend:

- `PamBot` handles question-and-answer requests to an external AI assistant.
- `Score` grades submitted code against a problem statement and a sample solution.
- `Problem Generator` creates programming exercises from a topic, difficulty, and language.
- `shared/http` contains the HTTP client layer used to talk to external AI services.

At runtime, the app:

- loads environment variables through `@nestjs/config`
- enables CORS
- applies a global validation pipe with whitelist and non-whitelisted rejection
- serves all routes under the `/api` prefix
- exposes Swagger at `/api/docs`

## Requirements

- Node.js 18 or newer
- Yarn or npm

## Installation

```bash
yarn install
```

## Environment Configuration

Create a `.env` file from `env.example` and set the external service credentials:

```env
SCORE_API="https://api.score.dev/v1"
SCORE_API_KEY="your_score_api_key_here"

PAMBOT_API="https://api.pambot.dev/v1"
PAMBOT_API_KEY="your_pambot_api_key_here"

GEN_PROBLEM_API="https://api.genproblem.dev/v1"
GEN_PROBLEM_API_KEY="your_gen_problem_api_key_here"
```

If `port` is not defined in the environment, the app defaults to `3001`.

## Running the App

```bash
# development
yarn start:dev

# production
yarn start:prod
```

## Quality Checks

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# coverage
yarn test:cov

# lint
yarn lint
```

## API Reference

All routes are prefixed with `/api`.

### PamBot

```http
POST /api/pambot/ask
```

Request body:

```json
{
  "question": "Explain the difference between let and const in TypeScript"
}
```

### Score

```http
POST /api/score/grade
```

Request body:

```json
{
  "problem": "Write a function that returns the sum of two integers a and b.",
  "student_code": "def add(a, b):\n    return a + b",
  "sample_code": "def add(a, b):\n    return a + b"
}
```

### Problem Generator

```http
POST /api/problem-generator/generate
```

Request body:

```json
{
  "topic": "array",
  "difficulty": "easy",
  "language": "Python"
}
```

## Swagger

When the app is running locally, open:

```text
http://localhost:3001/api/docs
```

## License

UNLICENSED
