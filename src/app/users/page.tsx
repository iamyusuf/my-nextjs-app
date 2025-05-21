export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return (
    <pre>{JSON.stringify(users, null, 2)}</pre>
  );
}
