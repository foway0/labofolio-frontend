import context from './core/context';
context.init();

// TODO import dependencies
import '../public/sass/global.sass';
import '../public/sass/layout.sass';

import Main from './Main.svelte';

const app = new Main({
  target: document.body,
});

export default app;