import RoutingButton from "@/components/Atom/Button/RoutingButton";
import TranlateButton from "@/components/Atom/Button/TranlateButton";
import { useTranslations } from "next-intl";
import React from "react";

export default function IndexPage() {
  const t = useTranslations("IndexPage");
  return (
    <div>
      <div>{t("title")}</div>
      <TranlateButton> {t("trans")}</TranlateButton>
      <div>
        <RoutingButton />
      </div>
    </div>
  );
}
