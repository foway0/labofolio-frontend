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

<h1>{name}!!!</h1>

{#await promise}
  <p>...waiting</p>
{:then stringify}
  <p>The result is {stringify}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}