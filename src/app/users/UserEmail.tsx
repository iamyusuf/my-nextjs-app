import { highlight } from "@/app/users/UserCard";

type UserEmailProps = {
  email: string;
  search: string;
};


export default function UserEmail({ email, search }: UserEmailProps) {
  return (
    <div className="text-zinc-700 dark:text-zinc-300">
      Email: {highlight(email, search)}
    </div>
  );
}
