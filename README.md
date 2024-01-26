# Swiggy Clone

Welcome to the Swiggy WebApp Clone repository! This project is a React.js-based web application that replicates the features of the popular food delivery platform Swiggy. The clone integrates Swiggy's Live API to provide real-time information about restaurants and dishes, enabling users to explore, select, and order their preferred meals.

## Development Setup

During development, you may encounter Cross-Origin Resource Sharing (CORS) issues.

### CORS Chrome Extension

To overcome CORS issues in your development environment, you can use the "CORS" Chrome extension. This extension allows you to temporarily disable CORS restrictions in your browser, making it easier to test and develop your application.

1. Install the [CORS Chrome Extension](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf).

2. Once the extension is installed, make sure it's enabled when testing your Swiggy WebApp Clone in the browser.

**Note:** The CORS extension is intended for development purposes only. Ensure that you disable the extension when accessing other websites for security reasons.

## Live Demo

Explore the live demo of the Swiggy WebApp Clone [here](https://swiggy-clone11.vercel.app/).

## Features

### 1. Real-time Information
- Integrated Swiggy's Live API to fetch the latest information about restaurants and dishes.

### 2. Custom React Hooks
- Enhanced code readability, modularity, and maintainability through the use of custom React Hooks.

### 3. Higher Order Components (HOC)
- Introduced a new feature for recently added restaurants using Higher Order Components.

### 4. Redux Toolkit
- Efficient state management and seamless Add to Cart functionality with the Redux Toolkit library.

### 5. Additional Features
- Shimmer UI for a visually appealing user experience.
- Online or Offline Status indicators for user awareness.
- Code Splitting and Lazy Loading for optimized performance.

## Tech Stack

- React.js
- Redux Toolkit
- Tailwind CSS
- Parcel (Bundler)

## Project Structure

- `src`: Main source code directory.
  - `components`: Reusable React components.
  - `hooks`: Custom React Hooks.
  - `hooks`: Custom Hooks.
  - `--tests--`: Testing using Jest
  - `store`: Redux store configuration and slices.
  - `utils`: Utility functions.

## Getting Started

1. Clone the repository.
   ```bash
   git clone https://github.com/g3vind/swiggy-webapp-clone.git
   ```

2. Install dependencies.
   ```bash
   cd swiggy-clone
   npm install
   ```

3. Run the development server.
   ```bash
   npm start
   ```

4. Open your browser and navigate to [http://localhost:1234](http://localhost:1234).



Feel free to navigate through the application, provide feedback, and enjoy the Swiggy-like experience! Happy coding!
