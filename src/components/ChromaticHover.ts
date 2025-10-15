export function attachChromaticHover(){ const els = Array.from(document.querySelectorAll('a, button')); for (const el of els) el.classList.add('link-chroma'); }
