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

<template lang="pug">
  h1 Hello World!
  hr
  h3 My first frontend develop
  div
    +await('promise')
      p ...waiting
      +then('object')
        +each('object.rows as item')
          div
            p Id: {item.id} : {item.subject}
            p {item.content_md}
          hr
      +catch('error')
        p(style="color: red") error.message
</template>