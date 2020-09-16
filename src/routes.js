import Home from './routes/Home.svelte';
import About from './routes/About.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
  '/': Home,
  '/about': About,
  '*': NotFound,
};