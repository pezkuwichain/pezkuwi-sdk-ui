# Contributing

Thank you for your interest in contributing to the Pezkuwi SDK UI!

## Development Setup

This project uses **Yarn** (modern version) for dependency management and workspaces.

### Prerequisites

- Node.js >= 18.14
- Yarn >= 4.0

### Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/pezkuwichain/pezkuwi-sdk-ui.git
    cd pezkuwi-sdk-ui
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    ```

3.  **Start development server:**
    ```bash
    yarn start
    ```

## Development Workflow

1.  **Branching:**
    -   Do not push directly to `master` or `main`.
    -   Create a feature branch: `git checkout -b feature/my-amazing-feature`.

2.  **Code Style & Linting:**
    -   We use ESLint to maintain code quality.
    -   Run the linter before committing:
        ```bash
        yarn lint
        ```
    -   Ensure your editor is configured to use the project's ESLint config.

3.  **Testing:**
    -   Run tests to ensure no regressions:
        ```bash
        yarn test
        ```
    -   Add new tests for new features.

4.  **Committing:**
    -   Write clear, descriptive commit messages.
    -   Reference issue numbers if applicable (e.g., `Fixes #123`).

## Pull Requests

1.  Push your branch to your fork.
2.  Open a Pull Request against the `main` branch.
3.  Fill out the Pull Request Template.
4.  Ensure CI checks pass.
5.  Wait for review.

## Guidelines

-   **No `--force` pushes** on shared branches.
-   **Atomic Commits:** Keep commits focused on a single change.
-   **Documentation:** Update README or other docs if you change functionality.

## Releases

Declaring formal releases remains the prerogative of the project maintainer(s).

