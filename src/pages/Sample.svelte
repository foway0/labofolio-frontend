<script>
  import {get} from '../utils/fetch';
  let promise = get('/sample/1');
</script>

<template lang="pug">
  div#layout_sample
    h1 SAMPLE PAGES!!!

  +await('promise')
    p ...waiting
    +then('stringify')
      p#test_success The result is {stringify}
    +catch('error')
      p#test_error {error.message}
</template>