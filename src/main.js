import './style.css';
import { Game, ROUTES } from './game/game.js';

const game = new Game();
window.__game = game; // handy for debugging in the console
window.__routes = ROUTES;
game.boot();
