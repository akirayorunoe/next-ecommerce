import { auth } from "@/server/auth";
import { UserButton } from "./user-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./logo";

export default async function Nav() {
  const session = await auth();
  return (
    <header className=" py-8">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href="/">
              <Logo />
            </Link>
          </li>
          {!session ? (
            <li>
              <Button asChild>
                <Link aria-label="sign-in" href="/auth/login">
                  login
                </Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton expires={session?.expires} user={session?.user} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
