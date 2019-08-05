<script>
  import Router from 'svelte-spa-router';
  import {link} from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';

  import routes from './routes';

  export let name;
</script>
<template lang="pug">
  mixin Router(routes)
    | <Router {routes}/>
    block

  div#layout_navigation_bar
    ul
      li
        a(href="/" 'use:link' 'use:active') Home
      li
        a(href="/about" 'use:link' 'use:active') About
      li
        a(href="/blog" 'use:link' 'use:active') Blog
      li
        a(href="/lab" 'use:link' 'use:active') Lab
      li#contact
        a(href="/contact" 'use:link' 'use:active') Contact
  +Router('routes')
</template>