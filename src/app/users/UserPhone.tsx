import { highlight } from "@/app/users/UserCard";

type UserPhoneProps = {
  readonly phone: string;
  readonly search: string;
};

export default function UserPhone({ phone, search }: UserPhoneProps) {
  return (
    <div className="text-zinc-700 dark:text-zinc-300">
      Phone: {highlight(phone, search)}
    </div>
  );
}
