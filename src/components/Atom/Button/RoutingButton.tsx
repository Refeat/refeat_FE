"use client";

import { useRouter } from "@/navigation";

// import { useRouter } from "next/navigation.js";

const RoutingButton = () => {
  const router = useRouter();
  return (
    <button className="bg-slate-500" onClick={() => router.push("/profile")}>
      RoutingButton
    </button>
  );
};

export default RoutingButton;
