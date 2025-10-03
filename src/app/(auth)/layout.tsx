"use client";

import React, { PropsWithChildren, useEffect } from "react";
import { useAuthStore } from "@/store/slices/auth.slice";
import { Routes } from "@/lib/routes/routes";
import { useRouter } from "next/navigation";

function AuthLayout({ children }: PropsWithChildren) {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(Routes.home);
    }
  }, [user]);

  return <div>{children}</div>;
}

export default AuthLayout;
