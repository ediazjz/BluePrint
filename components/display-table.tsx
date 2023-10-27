"use client"

import { useState } from "react"

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table"

import { Button } from "./button"

type TData = {
  feature: string
  package1: string | string[]
  package2: string | string[]
  package3: string | string[]
}
const fixedData: TData[] = [
  {
    feature: "activeJobOfferings",
    package1: "Up to 5 active job postings",
    package2: "Up to 15 active job postings",
    package3: "Unlimited active job postings",
  },
  {
    feature: "userAccounts",
    package1: "1 user account",
    package2: "Up to 5 user accounts",
    package3: "Up to 10 user accounts",
  },
  {
    feature: "customerSupport",
    package1: "Standard support (email)",
    package2: "Priority support (email and phone)",
    package3: "Premium support (email, 24/7 phone)",
  },
  {
    feature: "analyticsAndReporting",
    package1: ["Basic analytics and reporting"],
    package2: [
      "Basic analytics and reporting",
      "Advanced candidate management",
    ],
    package3: [
      "Customisable analytics and reporting",
      "Advanced candidate management with AI matching",
    ],
  },
  {
    feature: "apiAccessAndIntegrations",
    package1: "Not available",
    package2: "Limited API access and integrations",
    package3: "Full API access and integrations",
  },
  {
    feature: "brandingCustomisation",
    package1: "Not available",
    package2: "Limited branding customization",
    package3: "Full branding customization",
  },
  {
    feature: "automatedCommunication",
    package1: "Basic Email Notifications",
    package2: "Email and SMS Notifications",
    package3: "Advanced Email, SMS, and Push Notifications",
  },
  {
    feature: "dataExport",
    package1: "CSV Format",
    package2: "CSV and Excel",
    package3: "Multiple Formats Including CSV, Excel, and JSON",
  },
  {
    feature: "trainingAndOnboarding",
    package1: "Online Documentation",
    package2: "Online Tutorials and Webinars",
    package3: "Dedicated Onboarding Specialist and Online Tutorials",
  },
]

const columnHelper = createColumnHelper<TData>()
const columns = [
  columnHelper.accessor((row) => row.feature, {
    id: "Feature",
    header: () => <span className="sr-only">Feature</span>,
    cell: (info) => (
      <td className="focus w-60 text-left xl:w-80">
        {info
          .getValue()
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .replace(/^./, (str) => str.toUpperCase())}
      </td>
    ),
  }),
  columnHelper.accessor((row) => row.package1, {
    id: "Starter Quest",
    header: "Starter Quest",
    cell: (info) => info.getValue(),
    footer: () => (
      <Button
        type="button"
        styling="btn-primary-outlined"
        text="$20 USD / Month"
        className="whitespace-nowrap"
      />
    ),
  }),
  columnHelper.accessor((row) => row.package2, {
    id: "Talent Trailblazer",
    header: "Talent Trailblazer",
    cell: (info) => info.getValue(),
    footer: () => (
      <div className="mx-auto flex w-fit flex-col">
        <Button
          type="button"
          styling="btn-primary-filled"
          text="$60 USD / Month"
          className="mb-2 whitespace-nowrap"
        />
        <span className="focus text-secondary">* Popular option *</span>
      </div>
    ),
  }),
  columnHelper.accessor((row) => row.package3, {
    id: "Recruitment Royalty",
    header: "Recruitment Royalty",
    cell: (info) => info.getValue(),
    footer: () => (
      <Button
        type="button"
        styling="btn-primary-outlined"
        text="$200 USD / Month"
        className="whitespace-nowrap"
      />
    ),
  }),
]

export const DisplayTable = () => {
  const [data] = useState(() => [...fixedData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-x-scroll">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="menu-item p-4 text-primary">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="odd:bg-base-light even:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="w-40 min-w-[10rem] max-w-[10rem] p-6 text-center xl:w-48 xl:min-w-[12rem] xl:max-w-[12rem]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id} className="align-top">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  )
}
