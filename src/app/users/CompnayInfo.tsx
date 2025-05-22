type CompanyInfoProps = {
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
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

export default function CompanyInfo({ company, search = "" }: CompanyInfoProps) {
  return (
    <div>
      <span className="font-medium text-zinc-700 dark:text-zinc-200">Company:</span>
      <div className="ml-4">
        <div className="text-zinc-800 dark:text-zinc-200 font-semibold">{highlight(company.name, search)}</div>
        <div className="italic text-zinc-500 dark:text-zinc-400">{highlight(company.catchPhrase, search)}</div>
        <div className="text-xs text-zinc-500 dark:text-zinc-400">{highlight(company.bs, search)}</div>
      </div>
    </div>
  );
}