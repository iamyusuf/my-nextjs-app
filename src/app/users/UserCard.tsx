import { User } from "@/app/users/types";
import Address from "./Address";
import CompanyInfo from "./CompnayInfo";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-xl p-6 m-4 max-w-md border border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 bg-gradient-to-br from-blue-400 to-violet-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
          {user.name[0]}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {user.name}
            <span className="ml-2 text-sm text-zinc-500 dark:text-zinc-400 font-normal">@{user.username}</span>
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">ID: {user.id}</p>
        </div>
      </div>
      <div className="mb-2">
        <span className="font-medium text-zinc-700 dark:text-zinc-200">Email:</span> <a href={`mailto:${user.email}`} className="text-blue-600 dark:text-blue-400 underline">{user.email}</a>
      </div>
      <div className="mb-2">
        <span className="font-medium text-zinc-700 dark:text-zinc-200">Phone:</span> <span className="text-zinc-800 dark:text-zinc-300">{user.phone}</span>
      </div>
      <div className="mb-2">
        <span className="font-medium text-zinc-700 dark:text-zinc-200">Website:</span> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">{user.website}</a>
      </div>
      <Address address={user.address} />
      <CompanyInfo company={user.company} />
    </div>
  );
}
