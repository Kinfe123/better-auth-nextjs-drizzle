import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { headers } from "next/headers";
import data from "../data.json";
import { auth } from "@/lib/auth";

export default async function Page() {
  const res = await auth.api.getSession({
    headers: await headers(),
  });
  console.log({ res });
  return (
    <>
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </>
  );
}
