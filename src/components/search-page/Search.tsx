import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

import DoctorCardSkeleton from "./DoctorCardSkeleton"
import { fetchDoctors } from "./api-doctors"
import { DoctorCard } from "./DoctorCard"
import Specialties from "./Specialties"

import { FiChevronRight } from "react-icons/fi"
import { PiSlidersHorizontalThin } from "react-icons/pi"
import Modal from "../map/Modal"

export default function Search() {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const isFirstPage = page === 1

  const { data, isLoading } = useQuery({
    queryKey: ["doctors", page, search],
    queryFn: () => fetchDoctors(page, search),
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-6">
          <button className="flex items-center gap-2 rounded-xl border px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition">
            <PiSlidersHorizontalThin className="text-gray-500" />
            <span>Filter</span>
            <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-md border">
              <FiChevronRight className="text-gray-400" />
            </span>
          </button>

          <input
            value={search}
            onChange={(e) => {
              setPage(1)
              setSearch(e.target.value)
            }}
            placeholder="Search doctors"
            className="flex-1 rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Modal />
        </div>

        <h2 className="font-semibold mb-3">Choose Specialties</h2>
        <Specialties />

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <DoctorCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {data?.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        )}

        {/* pagination */}
        <div
          className={`mt-10 flex ${
            isFirstPage ? "justify-center" : "justify-between"
          }`}
        >
          {!isFirstPage && (
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-xl border text-blue-400 border-blue-400 px-14 py-3 text-sm hover:bg-blue-50  cursor-pointer transition "
            >
              Previous page
            </button>
          )}

          <button
            onClick={() => setPage((p) => p + 1)}
            className="rounded-xl border text-blue-400 border-blue-400 px-14 py-3 text-sm hover:bg-blue-50 cursor-pointer transition "
          >
            Next Page
          </button>
        </div>
      </main>
    </div>
  )
}
