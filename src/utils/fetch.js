import env from '../shared/environment';

// TODO

export async function get(endpoints, options = {}) {
  const res = await fetch(`${env.API_URL}${endpoints}`, options);
  const text = await res.text();
  console.log(`${env.API_URL}${endpoints}`);

  if (res.ok) {
    return JSON.stringify(text);
  } else {
    throw new Error(text);
  }
}