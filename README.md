# Hacker News Top Stories 
Time: 4h + Readme docs
## Description
Solution displays the top 10 Hacker News stories sorted in ascending order by their score. 
<br>
The application is built with Nuxt v4 and structured using a modular approach, making the codebase organized.

<br>
**Because of the API’s composition, the solution wasn’t simple to implement with parallel fetching. Instead, I decided to retrieve all story IDs on the server side, and another client request to retrieve story and user information to map stories with the corresponding story and user karma information.**

## Feedback
Managed to resolve Task 1. It was simple, with not much logic required, and the styles were made with plain SCSS and CSS. However, the structure of the Hacker News API made it a bit cumbersome as it required too many network requests to gather the necessary data. It was fun though. I went  back and rethink my approach instead of just using parallel fetching

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
