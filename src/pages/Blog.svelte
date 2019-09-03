<script>
  import {t, user} from '../../src/core/context';
  import context from '../../src/core/context';
  const constant = context.constant;
  const API_URL = context.config.API_URL;

  async function postBlogs() {
    const body = {
      subject: subject,
      status: Number(yes).toString(),
      content_md: simpleMde.value(),
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', token);
    const options = {
      method: 'POST',
      mode: 'cors',
      body: body,
      headers: headers,
    };
    const res = await context.fetch(`${API_URL}/blogs`, options);

    if (res.ok) {
      promise = list();
    }
  }

  let promise = list();
  async function list() {
    const res = await fetch(`${API_URL}/blogs`);
    const text = await res.text();
    if (res.ok) {
      return JSON.parse(text);
    } else {
      throw new Error(text);
    }
  }
  
  import { afterUpdate } from 'svelte';

  let simpleMde;
  let subject = '';
  let yes = false;

  afterUpdate(() => {
    if($user.token && $user.role === constant.ROLE.admin) {
      simpleMde = new SimpleMDE({
        element: document.getElementById("demo1"),
        spellChecker: false,
      });
    }
  });
</script>

<template lang="pug">
  include ../core/mixins

  div#layout_blog
    h1 {$t('blog.title')}
    +if('!!$user.token && $user.role === constant.ROLE.admin')
      h1 hello admin!
      div#layout_blog_form
        form('on:submit|preventDefault={postBlogs}')
          h1 subjects
          input(type='text' 'bind:value={subject}')
          h1 is public
          input(type='checkbox' 'bind:checked={yes}')
          h1 contents
          textarea(id='demo1' style='display: none;')
          button('on:submit') i love post
    div#layout_blog_list
      +await('promise')
        p ...waiting
        +then('items')
          +each('items as item')
            div#layout_blog_list_subject
              h1 subject: {item.subject}
            div#layout_blog_list_content
              +chtml('item')
        +catch('error')
          p(style="color: red") {error.message}
</template>