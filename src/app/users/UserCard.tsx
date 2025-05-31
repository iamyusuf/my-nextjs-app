
import React from "react";
import { User } from "@/app/users/types";
import Address from "./Address";
import CompanyInfo from "./CompnayInfo";
import UserEmail from "@/app/users/UserEmail";
import UserPhone from "@/app/users/UserPhone";
import UserWebsite from "@/app/users/UserWebsite";

export function highlight(text: string, query: string) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200 text-black rounded px-1 py-0.5">{part}</mark>
    ) : (
      part
    )
  );
}

type UserCardProps = {
  readonly user: User;
  readonly search?: string;
};

export default function UserCard({ user, search = "" }: UserCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-xl p-6 m-4 max-w-md border border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 bg-gradient-to-br from-blue-400 to-violet-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
          {highlight(user.name[0], search)}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {highlight(user.name, search)}
            <span className="ml-2 text-sm text-zinc-500 dark:text-zinc-400 font-normal">@{highlight(user.username, search)}</span>
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">ID: {highlight(user.id.toString(), search)}</p>
        </div>
      </div>
      <UserEmail email={user.email} search={search} />
      <UserPhone phone={user.phone} search={search} />
      <UserWebsite website={user.website} search={search} />
      <Address address={user.address} search={search} />
      <CompanyInfo company={user.company} search={search} />
    </div>
  );
}
