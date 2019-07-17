import Test from './test.svelte';

const app = new Test({
  target: document.body,
  props: {
    name: 'HELLO WORLD'
  }
});

export default app;