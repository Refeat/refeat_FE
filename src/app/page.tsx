import { redirect } from "@/lib/i18n/navigation.js";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect("/ko");

}
