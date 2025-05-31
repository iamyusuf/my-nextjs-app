import { highlight } from "@/app/users/UserCard";

type UserWebsiteProps = {
  website: string;
  search: string;
};

export default function UserWebsite({ website, search }: UserWebsiteProps) {
  return (
    <div className="text-zinc-700 dark:text-zinc-300">
      Website: {highlight(website, search)}
    </div>
  );
}
