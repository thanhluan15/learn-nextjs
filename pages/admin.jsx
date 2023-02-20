import React from "react";
import { useSession } from "next-auth/react";

export default function AdminDashboard() {
  const { data: session } = useSession();
  console.log(session);
  return <div>Some super secret dashboard</div>;
}

AdminDashboard.auth = {
    role: "admin",
    // loading: <AdminSkeleton/>
};
