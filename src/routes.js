import Home from './pages/Home.svelte';
import Sample from './pages/Sample.svelte';
import NotFound from './pages/NotFound.svelte';

export default {
  '/': Home,
  '/sample': Sample,
  '*': NotFound,
};