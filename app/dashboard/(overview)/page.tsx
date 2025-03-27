import { Card } from "../../ui/dashboard/cards";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { inter } from '@/app/ui/fonts'
//import { fetchCardData } from '@/app/lib/data'; //remove fetchRevenue
import CardWrapper from "../../ui/dashboard/cards";

import { Suspense } from "react";
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton
} from "@/app/ui/skeletons";

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export default async function Page() {
  //const revenue = await fetchRevenue(); // wait for fetchRevenue() to finish
  //const latestInvoices = await fetchLatestInvoices();
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPendingInvoices,
  //   totalPaidInvoices,
  // } = await fetchCardData(); // wait for fetchLatestInvoices() to finish
  return (
    <main>
      <h1 className={`${inter.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue} /> */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
  //<p>Dashboard Page</p>;
}