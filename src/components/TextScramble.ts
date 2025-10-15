export class TextScramble {
  el: HTMLElement; chars = '!<>-_\\/[]{}—=+*^?#________';
  queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
  frame = 0; raf?: number; running = false;
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  constructor(el: HTMLElement){ this.el = el; }
  setText(newText: string){
    if (this.reduced) { this.el.textContent = newText; return Promise.resolve(); }
    const oldText = this.el.textContent || ''; const length = Math.max(oldText.length, newText.length); this.queue = [];
    for (let i=0;i<length;i++){ const from=oldText[i]||''; const to=newText[i]||''; const start=Math.floor(Math.random()*20); const end=start+Math.floor(Math.random()*20); this.queue.push({from,to,start,end}); }
    cancelAnimationFrame(this.raf!); this.frame=0; this.running=true;
    return new Promise<void>((resolve)=>{ const update=()=>{
      let output=''; let complete=0; for (let i=0;i<this.queue.length;i++){ let {from,to,start,end,char}=this.queue[i];
        if (this.frame>=end){ complete++; output+=to; }
        else if (this.frame>=start){ if(!char||Math.random()<.28){ char=this.randomChar(); this.queue[i].char=char; } output+=`<span style="color:var(--acid)">${char}</span>`; }
        else { output+=from; }
      }
      this.el.innerHTML=output; if (complete===this.queue.length){ this.running=false; resolve(); } else { this.frame++; this.raf=requestAnimationFrame(update); }
    }; update(); });
  }
  randomChar(){ return this.chars[Math.floor(Math.random()*this.chars.length)]; }
}
