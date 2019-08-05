// TODO import dependencies
import '../public/css/global.sass';
import '../public/css/layout.sass';

import Main from './Main.svelte';

const app = new Main({
  target: document.body,
  props: {
    name: 'HELLO WORLD'
  }
});

export default app;