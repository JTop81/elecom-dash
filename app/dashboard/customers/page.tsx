import Pagination from '@/app/ui/customers/pagination';
// import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
// import { CreateInvoice } from '@/app/ui/invoices/buttons';
// import { inter } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { fetchCustomersPages } from '@/app/lib/data';
// import { generatePagination } from '@/app/lib/utils';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 5;
  const totalPages = await fetchCustomersPages(query);

  // const page = searchParams['page'] ?? '1';
  // const per_page = searchParams['per_page'] ?? '5';
  // const allPages = generatePagination(currentPage, totalPages);
  return (
    <div className="w-full">
      <Suspense key={query + currentPage}>
        <Table query={query} currentPage={currentPage} customers={[]} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
