import { User } from "./types";

export default function Address({ address }: { address: User["address"] }) {
  return (
    <div className="mb-2">
      <span className="font-medium text-zinc-700 dark:text-zinc-200">Address:</span>
      <div className="ml-4 text-zinc-700 dark:text-zinc-300">
        <div>{address.street}, {address.suite}</div>
        <div>{address.city}, {address.zipcode}</div>
        <div className="text-xs text-zinc-500 dark:text-zinc-400">Geo: {address.geo.lat}, {address.geo.lng}</div>
      </div>
    </div>
  );
}