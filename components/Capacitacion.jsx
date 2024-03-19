"use client"

import { useState } from "react"
import { RadioGroup } from "@headlessui/react"
import { CheckCircleIcon } from "@heroicons/react/20/solid"

const mailingLists = [
  {
    id: 1,
    title: "Newsletter",
    description: "Last message sent an hour ago",
    users: "621 users",
  },
  {
    id: 2,
    title: "Existing Customers",
    description: "Last message sent 2 weeks ago",
    users: "1200 users",
  },
  {
    id: 3,
    title: "Trial Users",
    description: "Last message sent 4 days ago",
    users: "2740 users",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const Capacitacion = () => {
  const [selectedMailingLists, setSelectedMailingLists] = useState(
    mailingLists[0]
  )

  return (
    <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      <RadioGroup.Label className="leading-6 text-base font-semibold text-gray-900">
        Select a mailing list
      </RadioGroup.Label>

      <div className="group mt-4 grid grid-cols-1 gap-y-6 odd:bg-blue-400 sm:grid-cols-3 sm:gap-x-4">
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ active }) =>
              classNames(
                active
                  ? "border-indigo-600 ring-2 ring-indigo-600"
                  : "border-gray-300",
                "relative flex cursor-pointer rounded-lg border p-4 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 group-hover:bg-blue-800"
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {mailingList.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-gray-500"
                    >
                      {mailingList.description}
                    </RadioGroup.Description>
                    <RadioGroup.Description
                      as="span"
                      className="mt-6 text-sm font-medium text-gray-900"
                    >
                      {mailingList.users}
                    </RadioGroup.Description>
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(
                    !checked ? "invisible" : "",
                    "h-5 w-5 text-indigo-600"
                  )}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-indigo-600" : "border-transparent",
                    "-inset-px pointer-events-none absolute rounded-lg"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ active }) =>
              classNames(
                active
                  ? "border-indigo-600 ring-2 ring-indigo-600"
                  : "border-gray-300",
                "relative flex cursor-pointer rounded-lg border p-4 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 group-hover:bg-blue-800"
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {mailingList.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-gray-500"
                    >
                      {mailingList.description}
                    </RadioGroup.Description>
                    <RadioGroup.Description
                      as="span"
                      className="mt-6 text-sm font-medium text-gray-900"
                    >
                      {mailingList.users}
                    </RadioGroup.Description>
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(
                    !checked ? "invisible" : "",
                    "h-5 w-5 text-indigo-600"
                  )}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-indigo-600" : "border-transparent",
                    "-inset-px pointer-events-none absolute rounded-lg"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
      </div>
    </RadioGroup>
  )
}
