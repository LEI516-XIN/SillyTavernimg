const ENHANCED_STYLE_ID = 'imap-default-light-theme';

const theme = `
#${ENHANCED_STYLE_ID} { display: none; }
.imap-panel {
  background: #fafcff !important;
  border: 1px solid #b9c9dc !important;
  border-radius: 12px !important;
  box-shadow: 0 12px 34px rgba(54, 88, 128, 0.16), 0 2px 8px rgba(54, 88, 128, 0.08) !important;
  color: #526a82 !important;
}
.imap-header, .imap-travel-header {
  background: #f7f9fc !important;
  border-bottom: 1px solid #e3ebf4 !important;
  color: #334d66 !important;
}
.imap-panel h1, .imap-panel h2, .imap-panel h3, .imap-panel strong,
.imap-panel b, .imap-travel-header h3 {
  color: #334d66 !important;
}
.imap-panel, .imap-panel p, .imap-panel label, .imap-panel span,
.imap-panel small, .imap-travel-body, .imap-travel-field {
  color: #526a82 !important;
}
.imap-overlay {
  background: rgba(45, 64, 84, 0.38) !important;
  backdrop-filter: blur(6px) !important;
  -webkit-backdrop-filter: blur(6px) !important;
}
.imap-travel {
  background: #ffffff !important;
  border: 1px solid #b9c9dc !important;
  border-radius: 14px !important;
  box-shadow: 0 16px 42px rgba(50, 83, 120, 0.18) !important;
}
.imap-travel-hint, .imap-travel-dest {
  border: 1px solid #d7e4f2 !important;
  border-radius: 8px !important;
  background: #f2f7fd !important;
  color: #6684a2 !important;
}
.imap-input, .imap-travel-select {
  border: 1px solid #b8c9dd !important;
  border-radius: 8px !important;
  background: #ffffff !important;
  color: #445e73 !important;
}
.imap-input::placeholder { color: #9aabb9 !important; }
.imap-input:focus, .imap-travel-select:focus {
  border-color: #5b9cf0 !important;
  outline: none !important;
  box-shadow: 0 0 0 3px rgba(91, 156, 240, 0.16) !important;
}
.imap-btn, .imap-travel .imap-btn-secondary, .imap-travel .imap-btn-ghost {
  border: 1px solid #c7d5e6 !important;
  border-radius: 8px !important;
  background: #ffffff !important;
  color: #526a82 !important;
  box-shadow: 0 1px 3px rgba(70, 110, 160, 0.05) !important;
}
.imap-btn:hover:not(:disabled) {
  border-color: #8eb8ee !important;
  background: #eef5ff !important;
  color: #276fe5 !important;
}
.imap-btn-primary, .imap-travel .imap-btn-primary {
  border-color: #5b9cf0 !important;
  background: #4f8edb !important;
  color: #ffffff !important;
}
.imap-travel .imap-btn-primary:hover:not(:disabled) {
  background: #397ed3 !important;
  color: #ffffff !important;
}
.imap-travel-close, .imap-close-btn {
  width: 32px !important;
  height: 32px !important;
  min-width: 32px !important;
  border: 1px solid #c5d4e5 !important;
  border-radius: 50% !important;
  background: #f7faff !important;
  color: #6687aa !important;
  box-shadow: 0 2px 8px rgba(70, 110, 160, 0.10) !important;
}
.imap-travel-close:hover, .imap-close-btn:hover {
  border-color: #8eb8ee !important;
  background: #edf5ff !important;
  color: #276fe5 !important;
  transform: scale(1.04);
}
.imap-travel-enhanced-actions {
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
}
.imap-travel-enhanced-actions .imap-travel-select {
  flex: 1;
  min-width: 0;
  height: 34px;
  padding: 6px 10px;
}
.imap-travel-random {
  border: 1px solid #b5c8df !important;
  border-radius: 8px !important;
  background: #eef5ff !important;
  color: #276fe5 !important;
  white-space: nowrap;
}
.imap-panel, .imap-manager, .imap-map-area, .imap-map-stage,
.imap-content, .imap-view, .imap-body {
  background: #fafcff !important;
  border-color: #b9c9dc !important;
  color: #526a82 !important;
}
.imap-panel [class*="gold"], .imap-panel [class*="yellow"],
.imap-panel [class*="accent"], .imap-panel [class*="nav"],
.imap-panel svg, .imap-panel i {
  border-color: #9bb8d9 !important;
  color: #4f91e8 !important;
  fill: #4f91e8 !important;
  stroke: #4f91e8 !important;
}
.imap-panel [class*="pin"], .imap-panel [class*="marker"],
.imap-panel [class*="point"] {
  filter: hue-rotate(145deg) saturate(0.85) !important;
}
.imap-panel [class*="active"], .imap-panel [aria-selected="true"],
.imap-panel .selected, .imap-panel [class*="selected"] {
  border-color: #8eb8ee !important;
  background: #eef5ff !important;
  color: #276fe5 !important;
}
.imap-panel hr, .imap-panel tr, .imap-panel td, .imap-panel th,
.imap-panel li, .imap-panel [class*="divider"],
.imap-panel [class*="separator"], .imap-panel [class*="row"] {
  border-color: #d7e2ef !important;
}
.imap-panel [class*="toolbar"], .imap-panel [class*="footer"],
.imap-panel [class*="sidebar"], .imap-panel [class*="controls"],
.imap-panel [class*="menu"], .imap-panel [class*="card"],
.imap-panel [class*="item"] {
  background: #f8fbff !important;
  border-color: #c5d5e7 !important;
  color: #526a82 !important;
}
.imap-panel [class*="title"], .imap-panel [class*="heading"],
.imap-panel [class*="label"], .imap-panel [class*="name"] {
  color: #334d66 !important;
}
.imap-panel [class*="desc"], .imap-panel [class*="hint"],
.imap-panel [class*="help"], .imap-panel [class*="meta"],
.imap-panel small {
  color: #8195a7 !important;
}
.imap-popup {
  background: #ffffff !important;
  border: 1px solid #b9c9dc !important;
  border-radius: 14px !important;
  box-shadow:
    0 16px 42px rgba(50, 83, 120, 0.20),
    0 2px 8px rgba(50, 83, 120, 0.08) !important;
  color: #526a82 !important;
}
.imap-popup-header {
  background: #f7f9fc !important;
  border-bottom: 1px solid #e3ebf4 !important;
  color: #334d66 !important;
}
.imap-popup-header h2, .imap-popup-header h3, .imap-popup-header strong {
  color: #334d66 !important;
}
.imap-popup-body {
  background: #ffffff !important;
  color: #526a82 !important;
}
.imap-popup-desc, .imap-popup-body p, .imap-popup-body span {
  color: #526a82 !important;
}
.imap-popup-desc {
  border-left: 2px solid #8eb8ee !important;
  border-radius: 0 8px 8px 0;
  background: #f4f8fd !important;
}
.imap-popup-color {
  border-radius: 50%;
  background: #4f91e8 !important;
  box-shadow: 0 0 10px rgba(79, 145, 232, 0.28) !important;
}
.imap-floors {
  border-top: 1px solid #d7e2ef !important;
}
.imap-floor-item {
  border: 1px solid #c8d7e8 !important;
  border-radius: 9px !important;
  background: #f8fbff !important;
  color: #526a82 !important;
  box-shadow: 0 1px 3px rgba(70, 110, 160, 0.05) !important;
}
.imap-floor-item:hover {
  border-color: #8eb8ee !important;
  background: #eef5ff !important;
  color: #276fe5 !important;
}
.imap-floor-name, .imap-floor-arrow {
  color: inherit !important;
}
.imap-popup-back {
  width: 32px !important;
  height: 32px !important;
  min-width: 32px !important;
  border: none !important;
  border-radius: 0 !important;
  background: transparent !important;
  color: #6687aa !important;
  box-shadow: none !important;
  font-size: 20px !important;
}
.imap-popup-back:hover {
  border: none !important;
  background: transparent !important;
  color: #276fe5 !important;
  transform: none !important;
}
.imap-popup-close {
  width: 32px !important;
  height: 32px !important;
  min-width: 32px !important;
  border: 1px solid #c5d4e5 !important;
  border-radius: 50% !important;
  background: #f7faff !important;
  color: #6687aa !important;
  box-shadow: 0 2px 8px rgba(70, 110, 160, 0.10) !important;
}
.imap-popup-close:hover {
  border-color: #8eb8ee !important;
  background: #edf5ff !important;
  color: #276fe5 !important;
}
.imap-pin-pulse {
  border-color: #4f91e8 !important;
  background: rgba(79, 145, 232, 0.28) !important;
  box-shadow: 0 0 12px rgba(79, 145, 232, 0.38) !important;
}
.imap-popup-actions {
  border-top: 1px solid #e3ebf4 !important;
  background: #f7f9fc !important;
}
.imap-popup-actions .imap-btn-primary {
  border: 1px solid #4f91e8 !important;
  border-radius: 8px !important;
  background: #4f91e8 !important;
  color: #ffffff !important;
  box-shadow: 0 3px 10px rgba(39, 111, 229, 0.16) !important;
}
.imap-popup-actions .imap-btn-primary:hover:not(:disabled) {
  border-color: #397ed3 !important;
  background: #397ed3 !important;
  color: #ffffff !important;
}
.imap-spinner, .imap-loading, [class*="loading-spinner"],
[class*="spinner"], [class*="loading-circle"] {
  border-color: #d7e2ef !important;
  border-top-color: #4f91e8 !important;
  border-right-color: #8eb8ee !important;
  color: #4f91e8 !important;
  box-shadow: 0 0 10px rgba(79, 145, 232, 0.18) !important;
}
.imap-loading::before, [class*="loading-spinner"]::before,
[class*="spinner"]::before {
  border-color: #d7e2ef !important;
  border-top-color: #4f91e8 !important;
  border-right-color: #8eb8ee !important;
  box-shadow: 0 0 10px rgba(79, 145, 232, 0.18) !important;
}
.imap-panel button[class*="apply"],
.imap-panel button[class*="save"],
.imap-panel button[class*="confirm"],
.imap-panel .imap-btn-primary,
.imap-panel [class*="apply-btn"],
.imap-panel [class*="save-btn"] {
  border: 1px solid #4f91e8 !important;
  border-radius: 8px !important;
  background: #4f91e8 !important;
  color: #ffffff !important;
  box-shadow: 0 3px 10px rgba(39, 111, 229, 0.16) !important;
}
.imap-panel button[class*="apply"]:hover:not(:disabled),
.imap-panel button[class*="save"]:hover:not(:disabled),
.imap-panel button[class*="confirm"]:hover:not(:disabled),
.imap-panel .imap-btn-primary:hover:not(:disabled),
.imap-panel [class*="apply-btn"]:hover:not(:disabled),
.imap-panel [class*="save-btn"]:hover:not(:disabled) {
  border-color: #397ed3 !important;
  background: #397ed3 !important;
  color: #ffffff !important;
}
`;

function unique(items) {
  return [...new Set(items.map(item => String(item).trim()).filter(Boolean))];
}

function getMapLocations() {
  return window.__imapDefaultLocations || [];
}

async function loadLocations() {
  try {
    const url = new URL('末世：破晓时代.json', import.meta.url);
    const response = await fetch(url);
    if (!response.ok) return;
    const data = await response.json();
    const names = [];
    Object.values(data.maps || {}).forEach(map => {
      (map.pins || []).forEach(pin => {
        names.push(pin.name);
        (pin.floors || []).forEach(floor => names.push(floor.name));
      });
    });
    window.__imapDefaultLocations = unique(names);
  } catch (error) {
    console.warn('[互动地图] 读取地图地点失败', error);
  }
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)] || '';
}

function setInputValue(input, value) {
  const prototype = input instanceof HTMLInputElement
    ? HTMLInputElement.prototype
    : HTMLTextAreaElement.prototype;
  const descriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
  descriptor?.set?.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.dispatchEvent(new Event('change', { bubbles: true }));
}

function getCharacterNames() {
  const names = [];
  try {
    if (typeof window.getCharacterNames === 'function') {
      names.push(...window.getCharacterNames());
    }
  } catch {}
  try {
    if (typeof getCurrentCharacterName === 'function') {
      const current = getCurrentCharacterName();
      if (current) names.push(current);
    }
  } catch {}
  return unique(names);
}

function replaceInputWithChoices(input, choices, label, randomLabel, allowEmpty) {
  if (!input || input.dataset.imapEnhanced === 'true') return;
  if (!choices.length && !allowEmpty) return;

  input.dataset.imapEnhanced = 'true';
  input.style.display = 'none';

  const wrapper = document.createElement('div');
  wrapper.className = 'imap-travel-enhanced-actions';

  const select = document.createElement('select');
  select.className = 'imap-input imap-travel-select';
  select.setAttribute('aria-label', label);

  if (allowEmpty) select.add(new Option(label, ''));
  choices.forEach(choice => select.add(new Option(choice, choice)));
  if (input.value) select.value = input.value;

  select.addEventListener('change', () => setInputValue(input, select.value));

  const randomButton = document.createElement('button');
  randomButton.type = 'button';
  randomButton.className = 'imap-btn imap-travel-random';
  randomButton.textContent = randomLabel;
  randomButton.addEventListener('click', () => {
    const current = select.value;
    const pool = choices.filter(choice => choice !== current);
    const value = randomItem(pool.length ? pool : choices);
    select.value = value;
    setInputValue(input, value);
  });

  wrapper.append(select, randomButton);
  input.after(wrapper);
}

function enhanceTravelMenu() {
  const menu = document.querySelector('.imap-travel');
  if (!menu) return;

  const inputs = [...menu.querySelectorAll('input.imap-input')];
  const destination = inputs.find(input =>
    /目的地/.test(input.placeholder || '') ||
    !!input.closest('.imap-travel-custom')
  );
  if (destination) {
    replaceInputWithChoices(
      destination,
      getMapLocations(),
      '选择地点',
      '🎲 随机地点',
      true,
    );
  }

  const roleInputs = inputs.filter(input =>
    /角色|NPC|姓名/.test(input.placeholder || '')
  );
  roleInputs.forEach(role => {
    replaceInputWithChoices(
      role,
      getCharacterNames(),
      '选择加入角色',
      '🎲 随机角色',
      true,
    );
  });
}

function enhanceActionButtons() {
  document.querySelectorAll('.imap-panel button, .imap-travel button').forEach(button => {
    const text = button.textContent?.trim() || '';
    const className = button.className?.toLowerCase() || '';
    const isApplyButton =
      /^(应用|保存并应用|确认|确定)$/.test(text) ||
      /(apply|save|confirm)/.test(className);

    if (!isApplyButton) return;

    button.style.setProperty('border', '1px solid #4f91e8', 'important');
    button.style.setProperty('border-radius', '8px', 'important');
    button.style.setProperty('background', '#4f91e8', 'important');
    button.style.setProperty('color', '#ffffff', 'important');
    button.style.setProperty('box-shadow', '0 3px 10px rgba(39, 111, 229, 0.16)', 'important');
  });
}

function enhanceMapIcons() {
  document.querySelectorAll('.imap-pin-icon').forEach(icon => {
    if (icon.textContent?.trim() === '🏢') return;
    if (icon.textContent?.trim() === '🌀' || icon.textContent?.trim() === '📍') {
      icon.textContent = '📍';
    }
  });

  document.querySelectorAll('.imap-pin-pulse').forEach(pulse => {
    pulse.style.setProperty('border-color', '#4f91e8', 'important');
    pulse.style.setProperty('background', 'rgba(79, 145, 232, 0.28)', 'important');
    pulse.style.setProperty('box-shadow', '0 0 12px rgba(79, 145, 232, 0.38)', 'important');
  });
}

function enhanceLoadingIndicators() {
  document.querySelectorAll(
    '.imap-spinner, .imap-loading, [class*="loading-spinner"], [class*="spinner"], [class*="loading-circle"]',
  ).forEach(indicator => {
    indicator.style.setProperty('border-color', '#d7e2ef', 'important');
    indicator.style.setProperty('border-top-color', '#4f91e8', 'important');
    indicator.style.setProperty('border-right-color', '#8eb8ee', 'important');
    indicator.style.setProperty('color', '#4f91e8', 'important');
    indicator.style.setProperty('box-shadow', '0 0 10px rgba(79, 145, 232, 0.18)', 'important');
  });
}

function init() {
  if (!document.getElementById(ENHANCED_STYLE_ID)) {
    const style = document.createElement('style');
    style.id = ENHANCED_STYLE_ID;
    style.textContent = theme;
    document.head.append(style);
  }

  const observer = new MutationObserver(() => {
    enhanceTravelMenu();
    enhanceActionButtons();
    enhanceMapIcons();
    enhanceLoadingIndicators();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener('pagehide', () => observer.disconnect(), { once: true });

  loadLocations().finally(() => {
    enhanceTravelMenu();
    enhanceActionButtons();
    enhanceMapIcons();
    enhanceLoadingIndicators();
  });
  enhanceTravelMenu();
  enhanceActionButtons();
  enhanceMapIcons();
  enhanceLoadingIndicators();
}

$(() => init());
