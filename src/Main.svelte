<script>
  import Router from "svelte-spa-router";
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import routes from "./routes";
</script>

<!-- @formatter:off -->
<template lang="pug">
  include ./shared/mixins

  div
    ul
      li
        a(href="/" 'use:link' 'use:active') Home
      li
        a(href="/blog" 'use:link' 'use:active') Blog
      li
        a(href="/lab" 'use:link' 'use:active') Lab
      li
        a(href="/about" 'use:link' 'use:active') About

  +Router('routes')
</template>