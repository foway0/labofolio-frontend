<script>
  import {get} from './utils/fetch';
  export let name;
  let promise = get('/sample/1');
</script>

<style>
  h1 {
    color: blue;
  }
</style>

<template lang="pug">
  h1 {name}!!!

  +await('promise')
    p ...waiting
    +then('stringify')
      p The result is {stringify}
    +catch('error')
      p(style="color: red") {error.message}
</template>