# 🎬 YouTube Video Preview 

This project is a simplified YouTube-like application that allows users to view video previews, titles, authors, views, and upload dates. The app is built with **React + Vite + TypeScript** on the frontend and **Laravel** on the backend.

## Tech Stack

- **Frontend:** React, Vite, TypeScript, Jest
- **Backend:** Laravel 12, REST API
- **Testing:** Jest (Unit Testing)

## Implementation Notes

1. **API Consumption:** Frontend makes HTTP requests to Laravel backend using Axios.

2. **Video Cards:** Each video card displays preview, title, author, views, and posted date.

3. **Component Design:** Video UI elements (mute button, progress bar, etc.) are split into modular components.

4. **Search Feature:** Home screen includes a live search filtering by title or description.

5. **CORS:** Make sure the backend allows requests from your frontend dev server (usually http://localhost:5173).

6. **Video Preview Modes:** The VideoPreview component supports two modes, controlled via the mode prop:

        Interactive: Autoplay with hover effects and progress.

        Static: Displays only the thumbnail image with no interactivity.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

**Clone the repository**
```bash
git clone https://github.com/your-username/your-project-name.git
cd youtube-fe

## Install dependencies

npm install
# or
yarn install

## Start the development server

npm run dev
# or
yarn dev

## Unit Testing with Jest

npm test
# or
yarn test



