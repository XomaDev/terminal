import { writable } from 'svelte/store';
import type { Theme } from '../interfaces/theme';

const defaultColorscheme: Theme = {
  "name": "DefaultArthur",
  "black": "#3d352a",
  "red": "#cd5c5c",
  "green": "#86af80",
  "yellow": "#e8ae5b",
  "blue": "#6495ed",
  "purple": "#deb887",
  "cyan": "#b0c4de",
  "white": "#bbaa99",
  "brightBlack": "#554444",
  "brightRed": "#cc5533",
  "brightGreen": "#88aa22",
  "brightYellow": "#ffa75d",
  "brightBlue": "#87ceeb",
  "brightPurple": "#996600",
  "brightCyan": "#b0c4de",
  "brightWhite": "#ddccbb",
  "foreground": "#ddeedd",
  "background": "#1c1c1c",
  "backgroundSecond": "#26272c",
  "cursorColor": "#ddeedd"
}!;

export const theme = writable<Theme>(
  JSON.parse(
    localStorage.getItem('colorscheme') || JSON.stringify(defaultColorscheme),
  ),
);

theme.subscribe((value) => {
  localStorage.setItem('colorscheme', JSON.stringify(value));
});
