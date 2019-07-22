<script>
  import {get} from './utils/fetch';
  export let name;
  let promise = get('/sample/1');
</script>

<template lang="pug">
  h1#test_h1 {name}!!!???

  +await('promise')
    p ...waiting
    +then('stringify')
      p#test_success The result is {stringify}
    +catch('error')
      p#test_error {error.message}
</template>