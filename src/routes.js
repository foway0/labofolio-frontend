import Home from './routes/Home.svelte';
import Blog from './routes/Blog.svelte';
import Lab from './routes/Lab.svelte';
import About from './routes/About.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
  '/': Home,
  '/blog': Blog,
  '/lab': Lab,
  '/about': About,
  '*': NotFound,
};