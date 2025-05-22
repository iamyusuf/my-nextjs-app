"use client";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";


async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}


export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const filtered = users.filter((user: any) => {
    const haystack = JSON.stringify(user).toLowerCase();
    return haystack.includes(search.toLowerCase());
  });

  return (
    <div>
      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>
      <div className="flex flex-wrap justify-center items-stretch">
        {filtered.map((user: any) => (
          <UserCard key={user.id} user={user} search={search} />
        ))}
      </div>
    </div>
  );
}
