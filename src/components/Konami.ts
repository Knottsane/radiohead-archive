const SEQ=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
function showOverlay(){ if(document.getElementById('konami-overlay')) return; const overlay=document.createElement('div'); overlay.id='konami-overlay'; overlay.className='fixed inset-0 z-50 bg-black/90 text-[color:var(--fg)] flex items-center justify-center p-6'; overlay.innerHTML=`
  <div role="dialog" aria-modal="true" aria-label="Hidden access" class="max-w-md w-full border border-neutral-700 p-6 bg-neutral-900 relative">
    <button id="konami-close" class="absolute right-2 top-2 text-neutral-400 hover:text-[color:var(--acid)]" aria-label="Close">×</button>
    <h2 class="text-xl mb-2">ACCESS LINK</h2>
    <p class="mb-4 text-neutral-300">You’ve unlocked a hidden route.</p>
    <a class="inline-block px-4 py-2 bg-[color:var(--acid)] text-black font-mono" href="/hidden/void">Enter /hidden/void</a>
  </div>`; document.body.appendChild(overlay); document.getElementById('konami-close')?.addEventListener('click',()=>overlay.remove()); }
export function mountKonami(){ const keys:string[]=[]; window.addEventListener('keydown',(e)=>{ keys.push(e.key); if(keys.slice(-SEQ.length).join(',')===SEQ.join(',')){ showOverlay(); } }); }
