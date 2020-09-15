<script>
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

<h1>Hello world!</h1>
<hr>
<h3>My first frontend develop</h3>

<div>
  {#await promise}
    <p>...waiting</p>
  {:then object}
    <p>The count is {object.count}</p>
    {#each object.rows as item}
      <p>Id: {item.id} {item.subject}</p>
      <p>{item.content_md}</p>
      <hr>
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>