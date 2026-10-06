import {normalizeServerUrl} from './url.mjs';
const input = document.querySelector('#server');
const error = document.querySelector('#error');
const forget = document.querySelector('#forget');
const key = 'trading-desk-server-origin';
try { const saved = localStorage.getItem(key); if (saved) { input.value = normalizeServerUrl(saved); forget.hidden = false; } } catch {}
document.querySelector('#open').addEventListener('click', () => {
  error.textContent = '';
  try {
    const url = normalizeServerUrl(input.value);
    try { localStorage.setItem(key, url); } catch {}
    window.location.assign(url);
  } catch (e) { error.textContent = e.message; input.focus(); }
});
forget.addEventListener('click', () => {
  try { localStorage.removeItem(key); } catch {}
  input.value = ''; forget.hidden = true; error.textContent = ''; input.focus();
});
