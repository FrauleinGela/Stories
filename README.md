# Hacker News Top Stories 
Time: 4h + Readme docs
## Description
Solution displays the top 10 Hacker News stories sorted in ascending order by their score. 
<br>
The application is built with Nuxt v4 and structured using a modular approach, making the codebase organized.

## Features
 - Display top 10 Hacker News stories

 - Sort stories by score or author karma

 - Display stories in a grid column layout

 - Responsive grid design

 - Modular folder structure to separate business features, utilities, and API


## Folder Structure
```
|- lib/      # Utilities, all technicalities unrelated to business logic
|- core/     # API, all endpoints related to Hacker News
|- pages/    # Pages, with modular structure including:
|------------- Tests
|------------- Components
|------------- Composables
|------------- Helpers

```   

## Run Application
Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```