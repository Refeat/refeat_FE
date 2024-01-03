"use client";

import PATH from "@/data/constants/path";
import { useRouter } from "@/lib/i18n/navigation";

const RoutingButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(PATH.PROFILE)}>
      Routing to profile Button
    </button>
  );
};

export default RoutingButton;
