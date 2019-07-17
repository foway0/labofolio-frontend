<script>
  export let name;
  let promise = getSample();

  async function getSample() {
    const res = await fetch(`http://localhost/sample/1`);
    const text = await res.text();
    console.log(text);

    if (res.ok) {
      return JSON.stringify(text);
    } else {
      throw new Error(text);
    }
  }
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