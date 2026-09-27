import '../style.css';
import './alt.css';
import { AltGame } from './game.js';

const game = new AltGame();
window.__game = game; // handy for debugging in the console
game.boot();
