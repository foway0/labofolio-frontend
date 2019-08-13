<script>
  import Router from 'svelte-spa-router';
  import {link} from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';

  import {t, i18next} from '../src/core/context';
  const bar = $t('common.navigation_bar', {returnObjects: true});
  import routes from './routes';

  function handleClick() {
    i18next.changeLanguage(this.innerHTML);
    t.update(t=> t);
  }

  let accessToken;

  $: if(accessToken) {
    localStorage.setItem('token', accessToken);
  }

  function login() {
    document.domain = "localhost";
    window.authenticateCallback = function(token){
      accessToken = token;
    };
    window.open('http://localhost/auth/google');
  }
</script>
<template lang="pug">
  mixin Router(routes)
    | <Router {routes}/>
    block

  div#layout_navigation_bar
    ul
      li
        a(href="/" 'use:link' 'use:active') {bar.home}
      li
        a(href="/about" 'use:link' 'use:active') {bar.about}
      li
        a(href="/blog" 'use:link' 'use:active') {bar.blog}
      li
        a(href="/lab" 'use:link' 'use:active') {bar.lab}
      li#contact
        a(href="/contact" 'use:link' 'use:active') {bar.contact}
  +Router('routes')
  button('on:click={handleClick}') ja
  button('on:click={handleClick}') ko
  button#auth_google('on:click={login}') {accessToken ? 'logout' : 'login'}
</template>