import { useSession } from "next-auth/react";

import React from "react";

export default function Admin() {
  const { status } = useSession({ required: true, onUnauthenticated() {console.log("aaaa")} });

  console.log(status)

  if(status === "loading"){
    return <div>You must sign in to view this page</div>
}

  return <div>User is logged in</div>;
}
