const STYLE = `
  :host { all: initial; font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #20201f; }
  * { box-sizing: border-box; }
  [hidden] { display: none !important; }
  button, textarea { font: inherit; }
  button { cursor: pointer; }
  .launcher { position: fixed; right: 20px; bottom: 20px; z-index: 4; border: 0; border-radius: 999px; background: #1d1d1b; color: white; padding: 12px 16px; font-size: 13px; font-weight: 750; box-shadow: 0 8px 24px #0003; }
  .launcher b { color: #ff6b7a; }
  .veil { position: fixed; inset: 0; z-index: 1; background: #1118; cursor: crosshair; }
  .highlight { position: fixed; z-index: 2; pointer-events: none; border: 2px solid #ff6978; border-radius: 7px; box-shadow: 0 0 0 9999px #17171730; background: #ff697822; transition: inset .06s, width .06s, height .06s; }
  .hint { position: fixed; z-index: 3; pointer-events: none; background: #1e1e1c; color: white; border-radius: 7px; font-size: 11px; padding: 5px 8px; max-width: 300px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .panel { position: fixed; top: 18px; right: 18px; bottom: 18px; z-index: 5; width: min(360px, calc(100vw - 36px)); display: flex; flex-direction: column; background: #faf9f6; border: 1px solid #e2dfd9; border-radius: 18px; box-shadow: 0 18px 64px #0004; overflow: hidden; font-size: 13px; }
  .head { display: flex; align-items: center; justify-content: space-between; padding: 16px 18px; border-bottom: 1px solid #e9e6df; }
  .brand { font-size: 17px; font-weight: 850; letter-spacing: -.05em; }
  .brand span { color: #e76a74; }
  .icon { border: 0; background: transparent; font-size: 20px; color: #777; padding: 0 4px; }
  .body { flex: 1; overflow: auto; padding: 18px; }
  .eyebrow { color: #89877f; font-size: 10px; font-weight: 750; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 8px; }
  .selected { border: 1px solid #e6e1d9; border-radius: 12px; background: white; padding: 12px; margin-bottom: 12px; }
  .target { font-weight: 700; line-height: 1.4; overflow-wrap: anywhere; }
  .meta { color: #88857e; font-size: 11px; margin-top: 5px; overflow-wrap: anywhere; }
  .actions { display: flex; gap: 7px; margin: 12px 0; }
  .actions button { flex: 1; border: 1px solid #dfdcd5; border-radius: 9px; background: white; padding: 9px 4px; font-size: 12px; font-weight: 650; }
  .actions button:hover, .actions .active { background: #262623; border-color: #262623; color: white; }
  textarea { resize: vertical; width: 100%; min-height: 68px; border: 1px solid #dfdcd5; border-radius: 9px; padding: 9px; background: white; color: #242421; font-size: 12px; outline-color: #e76a74; }
  .save, .copy, .pick { width: 100%; border: 0; border-radius: 9px; padding: 10px; font-size: 12px; font-weight: 750; }
  .save { background: #e76a74; color: white; margin-top: 8px; }
  .copy { background: #272724; color: white; }
  .pick { background: #eeeae3; color: #34332f; margin-bottom: 18px; }
  .entry { border-top: 1px solid #e8e4de; padding: 12px 0; }
  .entry-top { display: flex; gap: 8px; align-items: start; }
  .entry-top strong { flex: 1; font-size: 12px; line-height: 1.4; overflow-wrap: anywhere; }
  .entry-top button { border: 0; background: none; color: #aaa59d; font-size: 17px; padding: 0; }
  .entry p { color: #76736c; font-size: 11px; line-height: 1.45; margin: 5px 0 0 25px; overflow-wrap: anywhere; }
  .empty { color: #99958d; font-size: 12px; line-height: 1.6; padding: 20px 0; }
  .foot { padding: 14px 18px; border-top: 1px solid #e9e6df; }
  .status { color: #8e8a82; font-size: 11px; text-align: center; margin-top: 8px; }
  .book { position: fixed; right: 151px; bottom: 20px; z-index: 4; border: 0; border-radius: 999px; background: white; color: #272724; padding: 12px 15px; font-size: 13px; font-weight: 750; box-shadow: 0 8px 24px #0003; }
  .picker-top { position: fixed; top: 18px; right: 18px; z-index: 5; border: 0; border-radius: 999px; background: #272724; color: white; padding: 10px 14px; font-size: 12px; font-weight: 750; }
  .end { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 5; width: 44px; height: 44px; border: 0; border-radius: 50%; background: white; color: #252520; box-shadow: 0 8px 28px #0004; font-size: 27px; }
  .popover { position: fixed; z-index: 6; width: 278px; background: #faf9f6; border: 1px solid #e7e2db; border-radius: 14px; padding: 10px; box-shadow: 0 18px 50px #0005; font-size: 12px; }
  .popover-target { font-size: 11px; font-weight: 700; color: #77746e; padding: 2px 3px 9px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .reactions { display: flex; gap: 7px; margin-bottom: 8px; }
  .reaction { flex: 1; border: 1px solid #e2ded6; border-radius: 9px; background: white; padding: 8px; font-size: 19px; }
  .reaction:hover { background: #f8e4e5; border-color: #eda1a8; }
  .comment-line { width: 100%; border: 1px solid #e3ded6; border-radius: 9px; background: white; padding: 10px; outline-color: #e7737d; color: #252520; font-size: 12px; }
  .comment-line::placeholder { color: #aaa69e; }
  .micro { margin: 7px 2px 0; color: #aaa69e; font-size: 10px; }
  .entry-edit { margin: 9px 0 0 24px; display: flex; gap: 5px; }
  .entry-edit button { flex: 1; padding: 5px 2px; border-radius: 7px; border: 1px solid #e4dfd8; background: white; font-size: 10px; }
  .entry-edit button.active { background: #242421; border-color: #242421; color: white; }
  .entry textarea { width: calc(100% - 24px); margin: 8px 0 0 24px; min-height: 55px; resize: vertical; border: 1px solid #e4dfd8; border-radius: 8px; padding: 8px; background: white; color: #262623; font-size: 11px; }
`;

function cssEscape(value) {
  return globalThis.CSS?.escape ? CSS.escape(value) : value.replace(/[^a-zA-Z0-9_-]/g, '\\$&');
}

function selectorFor(element) {
  if (element.id) return `#${cssEscape(element.id)}`;
  const parts = [];
  for (let node = element; node?.nodeType === 1 && node !== document.body; node = node.parentElement) {
    let part = node.localName;
    const testId = node.getAttribute('data-testid');
    if (testId) {
      part += `[data-testid="${testId.replaceAll('"', '\\"')}"]`;
      parts.unshift(part);
      break;
    }
    const siblings = [...node.parentElement.children].filter((child) => child.localName === node.localName);
    if (siblings.length > 1) part += `:nth-of-type(${siblings.indexOf(node) + 1})`;
    parts.unshift(part);
  }
  return parts.join(' > ');
}

function labelFor(element) {
  return (element.getAttribute('aria-label') || element.innerText || element.textContent || element.localName)
    .replace(/\s+/g, ' ').trim().slice(0, 90);
}

function promptFor(feedback) {
  const lines = ['Update the frontend based on the visual feedback below. Use the URL and selector to locate each element. If the page has changed, use the visible text to find the corresponding element. Preserve elements marked LIKE, improve elements marked DISLIKE, and follow the notes on elements marked COMMENT.', ''];
  feedback.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.sentiment.toUpperCase()} | ${item.url}`);
    lines.push(`   selector: ${item.selector}`);
    lines.push(`   element: <${item.tag}> ${JSON.stringify(item.text)}`);
    if (item.comment) lines.push(`   comment: ${item.comment}`);
  });
  return lines.join('\n').trim();
}

function mount(options = {}) {
  if (typeof document === 'undefined') throw new Error('kiss-or-slap needs a browser document');
  if (globalThis.__kissOrSlap) return globalThis.__kissOrSlap;

  const storageKey = options.storageKey || 'kiss-or-slap:feedback';
  const host = document.createElement('div');
  host.id = 'kiss-or-slap-root';
  document.documentElement.append(host);
  const shadow = host.attachShadow({ mode: 'open' });
  const style = document.createElement('style');
  style.textContent = STYLE;
  shadow.append(style);

  let feedback = [];
  try { feedback = JSON.parse(localStorage.getItem(storageKey) || '[]'); } catch { /* storage may be unavailable */ }
  if (!Array.isArray(feedback)) feedback = [];
  let panelOpen = false;
  let picking = false;
  let hovered = null;
  let selected = null;
  let notice = '';
  let level = 0;

  const save = () => { try { localStorage.setItem(storageKey, JSON.stringify(feedback)); } catch { /* private mode */ } };
  const h = (tag, className, parent, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text != null) el.textContent = text;
    parent.append(el);
    return el;
  };
  const button = (text, className, parent, click, title) => {
    const el = h('button', className, parent, text);
    el.type = 'button';
    if (title) el.title = title;
    el.addEventListener('click', click);
    return el;
  };
  const pickTarget = (event) => {
    const previous = veil.style.pointerEvents;
    veil.style.pointerEvents = 'none';
    const target = document.elementFromPoint(event.clientX, event.clientY);
    veil.style.pointerEvents = previous;
    if (!target || target === host || host.contains(target)) return null;
    let node = target;
    for (let i = 0; i < level && node.parentElement && node.parentElement !== document.body; i++) node = node.parentElement;
    return node;
  };
  const updateHighlight = (event) => {
    if (!picking || selected) return;
    hovered = pickTarget(event);
    if (!hovered) { highlight.hidden = true; hint.hidden = true; return; }
    const rect = hovered.getBoundingClientRect();
    Object.assign(highlight.style, { left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px` });
    highlight.hidden = false;
    hint.textContent = `${hovered.localName} · ${labelFor(hovered)}  ↑↓ change layer`;
    Object.assign(hint.style, { left: `${Math.max(8, rect.left)}px`, top: `${Math.max(8, rect.top - 28)}px` });
    hint.hidden = false;
  };
  const stopPicking = () => { picking = false; selected = null; panelOpen = true; veil.hidden = true; highlight.hidden = true; hint.hidden = true; render(); };
  const startPicking = () => { panelOpen = false; picking = true; selected = null; level = 0; veil.hidden = false; render(); };
  const addFeedback = (sentiment, comment = '') => {
    if (!selected) return;
    feedback.push({ id: globalThis.crypto?.randomUUID?.() || String(Date.now()), url: location.href, selector: selectorFor(selected), tag: selected.localName, text: labelFor(selected), sentiment, comment: comment.trim() });
    save();
    selected = null;
    hovered = null;
    highlight.hidden = hint.hidden = true;
    notice = 'Saved';
    render();
  };
  const onMove = (event) => updateHighlight(event);
  const onClick = (event) => {
    if (!picking || selected) return;
    event.preventDefault();
    event.stopPropagation();
    const target = pickTarget(event);
    if (!target) return;
    selected = target;
    render();
  };
  const onKey = (event) => {
    if (!picking) return;
    if (event.key === 'Escape') { if (selected) { selected = null; render(); } else stopPicking(); return; }
    if (selected) return;
    if (event.key === 'ArrowUp') { level++; updateHighlight(lastPointer); event.preventDefault(); }
    if (event.key === 'ArrowDown') { level = Math.max(0, level - 1); updateHighlight(lastPointer); event.preventDefault(); }
  };
  let lastPointer = { clientX: 0, clientY: 0 };
  const veil = h('div', 'veil', shadow);
  veil.hidden = true;
  const highlight = h('div', 'highlight', shadow);
  highlight.hidden = true;
  const hint = h('div', 'hint', shadow);
  hint.hidden = true;
  veil.addEventListener('pointermove', (event) => { lastPointer = event; onMove(event); });
  veil.addEventListener('click', onClick);
  document.addEventListener('keydown', onKey, true);

  function render() {
    shadow.querySelectorAll('.launcher, .book, .picker-top, .end, .popover, .panel').forEach((el) => el.remove());
    if (!panelOpen && !picking) {
      button(`▤ ${feedback.length}`, 'book', shadow, () => { panelOpen = true; render(); }, 'Open notes');
      button('kiss ♥ or slap', 'launcher', shadow, startPicking);
      return;
    }
    if (picking) {
      button(`▤ Notes ${feedback.length}`, 'picker-top', shadow, () => { stopPicking(); panelOpen = true; render(); }, 'Open notes');
      button('×', 'end', shadow, stopPicking, 'End selection');
      if (!selected) return;
      const rect = selected.getBoundingClientRect();
      const width = 278;
      const left = Math.min(innerWidth - width - 12, Math.max(12, rect.left));
      const top = rect.bottom + 138 < innerHeight ? rect.bottom + 12 : Math.max(12, rect.top - 150);
      const popover = h('div', 'popover', shadow);
      Object.assign(popover.style, { left: `${left}px`, top: `${top}px` });
      h('div', 'popover-target', popover, `<${selected.localName}> ${labelFor(selected)}`);
      const reactions = h('div', 'reactions', popover);
      button('❤️', 'reaction', reactions, () => addFeedback('like'), 'Like').setAttribute('aria-label', 'Like');
      button('👎', 'reaction', reactions, () => addFeedback('dislike'), 'Dislike').setAttribute('aria-label', 'Dislike');
      const input = h('input', 'comment-line', popover);
      input.placeholder = 'Optional: leave a cmt';
      input.setAttribute('aria-label', 'Optional: leave a cmt');
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && input.value.trim()) { event.stopPropagation(); addFeedback('comment', input.value); }
      });
      h('div', 'micro', popover, 'Enter to save comment · Esc to choose again');
      return;
    }
    const panel = h('div', 'panel', shadow);
    const head = h('div', 'head', panel);
    const brand = h('div', 'brand', head);
    brand.innerHTML = 'kiss <span>♥</span> or slap';
    button('×', 'icon', head, () => { panelOpen = false; render(); });
    const body = h('div', 'body', panel);
    button('+ Start picking', 'pick', body, startPicking);

    h('div', 'eyebrow', body, `NOTES · ${feedback.length}`);
    if (!feedback.length) h('div', 'empty', body, 'Pick something you love, dislike, or want to change.');
    for (const item of [...feedback].reverse()) {
      const entry = h('div', 'entry', body);
      const top = h('div', 'entry-top', entry);
      h('span', '', top, item.sentiment === 'like' ? '♥' : item.sentiment === 'dislike' ? '✕' : '✎');
      h('strong', '', top, item.text || item.selector);
      button('×', '', top, () => { feedback = feedback.filter((other) => other.id !== item.id); save(); render(); });
      h('p', '', entry, item.selector);
      const actions = h('div', 'entry-edit', entry);
      for (const [value, label] of [['like', '♥ Like'], ['dislike', '✕ Dislike'], ['comment', '✎ Comment']]) {
        button(label, item.sentiment === value ? 'active' : '', actions, () => { item.sentiment = value; save(); render(); });
      }
      const textarea = h('textarea', '', entry);
      textarea.placeholder = 'Optional: leave a cmt';
      textarea.value = item.comment;
      textarea.addEventListener('input', () => { item.comment = textarea.value; save(); });
    }
    const foot = h('div', 'foot', panel);
    const copy = button('Copy prompt', 'copy', foot, async () => {
      if (!feedback.length) return;
      try { await navigator.clipboard.writeText(promptFor(feedback)); notice = 'Copied to clipboard'; }
      catch { notice = 'Clipboard unavailable'; }
      render();
    });
    copy.disabled = feedback.length === 0;
    h('div', 'status', foot, notice || 'Feedback stays in this browser');
  }

  render();
  const api = {
    destroy() { document.removeEventListener('keydown', onKey, true); host.remove(); delete globalThis.__kissOrSlap; },
    getFeedback() { return feedback.map((item) => ({ ...item })); },
    async copyPrompt() { const prompt = promptFor(feedback); await navigator.clipboard.writeText(prompt); return prompt; },
  };
  globalThis.__kissOrSlap = api;
  return api;
}

export { mount };
