const root = document.documentElement;
const button = document.querySelector('.theme-toggle');
const icon = button.querySelector('.theme-icon');
const label = button.querySelector('.theme-label');

const savedTheme = localStorage.getItem('space-cats-theme');
const preferredTheme = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
const initialTheme = savedTheme || preferredTheme;

function applyTheme(theme) {
  const isLight = theme === 'light';
  root.dataset.theme = theme;
  button.setAttribute('aria-pressed', String(isLight));
  button.setAttribute('aria-label', isLight ? 'Увімкнути темну тему' : 'Увімкнути світлу тему');
  icon.textContent = isLight ? '☾' : '☀';
  label.textContent = isLight ? 'Темна' : 'Світла';
}

applyTheme(initialTheme);

button.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('space-cats-theme', nextTheme);
  applyTheme(nextTheme);
});
