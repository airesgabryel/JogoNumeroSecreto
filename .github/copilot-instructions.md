# Copilot Instructions for JogoSecreto (logica-js-projeto_inicial)

## Project Overview
- This is a simple JavaScript browser game where the user tries to guess a secret number.
- The main logic is in `app.js`, which interacts with the user via `alert` and `prompt`.
- The UI is defined in `index.html` and styled with `style.css`. Images are stored in the `img/` directory.

## Architecture & Data Flow
- All game logic is handled client-side in the browser.
- There is no backend or external API integration.
- The game starts with a welcome alert, prompts the user for a guess, and checks if it matches the secret number.
- Output is shown via `console.log` and browser dialogs.

## Developer Workflow
- No build step is required; open `index.html` in a browser to run the game.
- Debugging is done using browser DevTools (console, sources, etc.).
- No automated tests or test framework are present.

## Project-Specific Conventions
- Use simple, readable JavaScript (ES5/ES6) for all logic.
- All scripts are loaded directly in the HTML; no module system or bundler is used.
- Images and assets are referenced with relative paths from `img/`.
- Keep logic in `app.js` and avoid splitting into multiple files unless the project grows.

## Key Files & Directories
- `app.js`: Main game logic.
- `index.html`: Entry point and UI structure.
- `style.css`: Basic styling.
- `img/`: Contains all image assets.

## Example Pattern
```javascript
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 a 10');
if (chute == numeroSecreto) {
    console.log('Isso ai! Você descobriu o número secreto (5)');
}
```

## Guidance for AI Agents
- Focus on improving user interaction and game logic in `app.js`.
- If adding features, keep them simple and in a single file unless necessary.
- Document any new conventions or workflows in this file for future agents.
