"use client";

import React from "react";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const MemberPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/member");
    },
  });

  return (
    <div>
      <h1>MemberPage</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default MemberPage;
