export async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/5');
  const data = await response.json();
  return data;
}