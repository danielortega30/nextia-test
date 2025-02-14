# NextiaTest

A modern web application built with React, TypeScript, and Vite that demonstrates user and post management using the JSONPlaceholder API.

## Screenshots

### Users Page

![Users Page](/screenshots/user-page.png)

### User Detail

![User Detail](/screenshots/user-detail-page.png)

### Posts Page

![Posts Page](/screenshots/posts-page.png)

### Post Detail

![Post Detail](/screenshots/post-detail-page.png)

### Create Post

![Create Post](/screenshots/post-create-page.png)

### Edit Post

![Edit Post](/screenshots/post-editing-page.png)

## Features

- 👥 User Management

  - View all users
  - User details with posts
  - Responsive user cards

- 📝 Post Management

  - View all posts
  - Create new posts
  - Edit existing posts
  - View post details with comments

- 🎨 Modern UI
  - Material UI Icons
  - Tailwind CSS styling
  - Responsive design
  - Loading states
  - Error handling

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Material UI Icons
- React Router DOM
- Axios
- Redux Toolkit

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/danielortega30/nextia-test
cd nextia-test
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open http://localhost:5173 in your browser.

## Project Structure

```plaintext
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── services/      # API services
├── store/         # Redux store configuration
│   └── slices/    # Redux slices and reducers
├── types/         # TypeScript types
└── config/        # Configuration files

cypress/           # E2E Testing
├── e2e/          # Test specifications
└── support/       # Test support files

exercises/         # Technical test exercises from Nextia
├── exercise-1.js  # State management optimization
├── exercise-2.js  # useEffect and API calls
└── exercise-3.js  # Component reusability
```

## Testing

To run the E2E tests with Cypress:

1. Start the development server:

```bash
npm run dev
```

2. In a separate terminal, run Cypress:

```bash
npm run cypress
```

This will open the Cypress Test Runner where you can run and view the E2E tests in real-time.

## API

This project uses JSONPlaceholder for demonstration purposes.

## License

MIT License && Daniel Ortega
