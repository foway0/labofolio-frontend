<script>
  import Router from 'svelte-spa-router';
  import {link} from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';

  import {t, i18next} from '../src/core/context';
  const bar = $t('common.navigation_bar', {returnObjects: true});
  import context from '../src/core/context';
  const API_URL = context.config.API_URL;
  const API_DOMAIN = context.config.API_DOMAIN;
  import routes from './routes';

  function handleClick() {
    i18next.changeLanguage(this.innerHTML);
    t.update(t=> t);
  }

  let accessToken, roleId;
  let loggedIn = !!localStorage.getItem('token');

  $: if(accessToken) {
    localStorage.setItem('token', accessToken);
    loggedIn = !!localStorage.getItem('token');
  }

  $: if(roleId) {
    localStorage.setItem('role', roleId);
  }

  function login() {
    document.domain = API_DOMAIN;
    window.authenticateCallback = (token, role) => {
      accessToken = token;
      roleId = role;
    };
    window.open(`${API_URL}/auth/google`);
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    loggedIn = false;
  }
</script>
<template lang="pug">
  include mixins

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
  +if('loggedIn')
    button('on:click={logout}') logout
    +else()
      button('on:click={login}') login
</template>