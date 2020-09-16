<script>
  import Router from "svelte-spa-router";
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import routes from "./routes";

  async function list() {
    const res = await fetch(`https://API_URL/tests`);
    const text = await res.text();
    if (res.ok) {
      return JSON.parse(text);
    } else {
      throw new Error(text);
    }
  }

  let promise = list();
</script>

<!-- @formatter:off -->
<template lang="pug">
  include ./shared/mixins

  div
    ul
      li
        a(href="/" 'use:link' 'use:active') Home
      li
        a(href="/about" 'use:link' 'use:active') About

  +Router('routes')
</template>