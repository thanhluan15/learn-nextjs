import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./components/Button";
import Github from "next-auth/providers/github";

function Header() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div className="w-full flex h-[600px] justify-center items-center gap-2">
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  } else {
    return (
      <div className="w-full flex h-[600px] justify-center items-center gap-2">
        <Button onClick={() => signIn("github", { callbackUrl: "/admin" })}>
          Log in
        </Button>
        <Button>Sign up</Button>
      </div>
    );
  }
}

export default Header;
