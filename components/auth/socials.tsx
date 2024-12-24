"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Socials() {
  return (
    <div>
      <Button
        onClick={() =>
          signIn("google", {
            redirectTo: "/",
            redirect: false,
          })
        }
      >
        Sign in with Google
      </Button>
      <Button
        onClick={() =>
          signIn("github", {
            redirectTo: "/",
            redirect: false,
          })
        }
      >
        Sign in with Github
      </Button>
    </div>
  );
}
