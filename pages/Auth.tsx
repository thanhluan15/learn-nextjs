import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./components/Button";

function Header() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div className="w-full flex h-[600px] justify-center items-center gap-2">
        <Button children={"Sign out"} onClick={signOut}></Button>
      </div>
    );
  } else {
    return (
      <div className="w-full flex h-[600px] justify-center items-center gap-2">
        <Button children="Log in" onClick={signIn}></Button>
        <Button children="Sign up"></Button>
      </div>
    );
  }
}

export default Header;
