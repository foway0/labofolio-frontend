import Test from './test.svelte';
import '../public/css/test.sass';

const app = new Test({
  target: document.body,
  props: {
    name: 'HELLO WORLD'
  }
});

export default app;