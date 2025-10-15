export function initViewTransitions(){ const isSupported = 'startViewTransition' in document && CSS?.supports?.('view-transition-name: page'); if(!isSupported) return; }
