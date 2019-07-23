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

  div#layout_main_svelte
    h1#test_h1 {name}!!!???

  div#layout_links
    ul
      li
        a(href="/" 'use:link' 'use:active') Home
      li
        a(href="/sample" 'use:link') Sample
  +Router('routes')
</template>