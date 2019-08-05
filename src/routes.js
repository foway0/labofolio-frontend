import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import Blog from './pages/Blog.svelte';
import Lab from './pages/Lab.svelte';
import Contact from './pages/Contact.svelte';
import NotFound from './pages/NotFound.svelte';

export default {
  '/': Home,
  '/about': About,
  '/blog': Blog,
  '/lab': Lab,
  '/contact': Contact,
  '*': NotFound,
};