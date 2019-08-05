import context from './core/context';
context.init();

// TODO import dependencies
import '../public/css/global.sass';
import '../public/css/layout.sass';

import Main from './Main.svelte';

const app = new Main({
  target: document.body,
});

export default app;