import Dashboard from "./pages/dashboard/page";

import { PayableForm } from "@/components/Form/form";

export default function Home() {
  return (
    <>
    <div>
      <PayableForm />
      <Dashboard/>
    </div>
    </>
  );
}
