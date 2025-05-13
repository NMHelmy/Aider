# React Calculator – Aider

## Original Project Functionality

This project started as a basic React calculator application built using reusable components. It allowed users to:

- Enter numbers using a grid of buttons
- Perform basic arithmetic operations: +, -, ×, ÷
- Toggle sign (+/-), use percentages (%), and decimal points (.)
- Clear all inputs with AC
- Display current entry and results in a styled display component

## Features I Added

### 1. Calculation History

- Description: Shows a list of recent calculations underneath the calculator.
- Includes: A “Clear History” button to reset the history list.
- Format: Displays full equations like 3 + 4 = 7
- Files Modified: App.js, App.css

### 2. Dark/Light Mode Toggle

- Description: Adds a “Toggle Theme” button to switch between dark and light color schemes.
- Persistence: The selected theme is saved in localStorage and restored on reload.
- Files Modified: App.js, App.css

### 3. Scientific Mode

- Description: Adds a “Scientific Mode” toggle which reveals extra buttons for:
  - sin, cos, tan, log, √, ^
- Functionality: Uses trigonometric and logarithmic functions; exponentiation uses ^.
- Files Modified: App.js, ButtonPanel.js, calculate.js, operate.js

## Implementation Process

### Setup

1. Cloned the base React calculator project.
2. Installed dependencies (npm install)
3. Verified initial functionality.

### Planning

- Identified 3 meaningful user-focused features.
- Defined technical requirements.

### Development

- Used Aider (AI coding assistant) to:
  - Add and modify components
  - Explain existing logic
  - Auto-generate code changes
- Verified changes using /diff and finalized with /commit.

### Testing

- Ran npm start after each feature to test.
- Checked behavior across light/dark modes and scientific toggles.
- Manually validated outputs and edge cases (e.g., log(-1), 0 ÷ 0).

## Challenges & Solutions

| Challenge | Solution |
|----------|-----------|
| Aider didn't write files without /commit | Ensured to run /diff and /commit after every change |
| Theme changes not visually applying | Fixed by attaching class to top-level div and applying CSS |
| Scientific functions formatting | Used parseFloat and Math for consistency, wrapped angles in radians |
| Aider responded with samples, not code changes | Reworded prompts to say “modify file” instead of “explain” |

## Aider Commands Used

| Command | Purpose |
|--------|---------|
| /add src/component/App.js | Add main file to context |
| /ask Add a dark/light mode toggle... | Add themed UI with toggle |
| /ask Add a history feature... | Store/display past equations |
| /ask Add a scientific mode toggle... | Add new advanced math buttons |
| /diff | Preview changes |
| /commit | Save changes to file |
| /undo | Revert mistakes |
| /ask Explain how this calculator works | Understand existing logic |

Aider was effective in generating usable code, but prompts had to be specific to ensure it edited files directly.

## How to Run

```bash
npm install
npm start
```
