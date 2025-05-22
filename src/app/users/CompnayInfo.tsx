import { User } from "@/app/users/types";

export default function CompanyInfo({ company }: { company: User["company"] }) {
  return (
    <div>
      <span className="font-medium text-zinc-700 dark:text-zinc-200">Company:</span>
      <div className="ml-4">
        <div className="text-zinc-800 dark:text-zinc-200 font-semibold">{company.name}</div>
        <div className="italic text-zinc-500 dark:text-zinc-400">{company.catchPhrase}</div>
        <div className="text-xs text-zinc-500 dark:text-zinc-400">{company.bs}</div>
      </div>
    </div>
  );
}