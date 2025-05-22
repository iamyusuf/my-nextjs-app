
type AddressProps = {
  address: User["address"];
  search?: string;
};

function highlight(text: string, query: string) {
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

export default function Address({ address, search = "" }: AddressProps) {
  return (
    <div className="mb-2">
      <span className="font-medium text-zinc-700 dark:text-zinc-200">Address:</span>
      <div className="ml-4 text-zinc-700 dark:text-zinc-300">
        <div>{highlight(address.street, search)}, {highlight(address.suite, search)}</div>
        <div>{highlight(address.city, search)}, {highlight(address.zipcode, search)}</div>
        <div className="text-xs text-zinc-500 dark:text-zinc-400">Geo: {highlight(address.geo.lat, search)}, {highlight(address.geo.lng, search)}</div>
      </div>
    </div>
  );
}