import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

import DoctorCardSkeleton from "./DoctorCardSkeleton"
import { fetchDoctors } from "./api-doctors"
import { DoctorCard } from "./DoctorCard"
import Specialties from "./Specialties"

import { FiChevronRight } from "react-icons/fi"
import { PiSlidersHorizontalThin } from "react-icons/pi"
import Modal from "../map/Modal"
import FilterSidebar from "@/components/filters/FilterSidebar"

type Filters = {
  availableDate: "today" | "tomorrow" | null
  consultationType: "in_clinic" | "home_visit" | null
  gender: string[]
  sort: "recommended" | "price_low" | "price_high" | null
}

export default function Search() {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const isFirstPage = page === 1

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [filters, setFilters] = useState<Filters>({
    availableDate: null,
    consultationType: null,
    gender: [],
    sort: null,
  })

  // Toggle gender checkbox (multiple selection)
  const toggleGender = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      gender: prev.gender.includes(value)
        ? prev.gender.filter((g) => g !== value)
        : [...prev.gender, value],
    }))
  }

  // Toggle radio filters with ability to unselect if same clicked again
  const toggleAvailableDate = (value: "today" | "tomorrow") => {
    setFilters((prev) => ({
      ...prev,
      availableDate: prev.availableDate === value ? null : value,
    }))
  }

  const toggleConsultationType = (value: "in_clinic" | "home_visit") => {
    setFilters((prev) => ({
      ...prev,
      consultationType: prev.consultationType === value ? null : value,
    }))
  }

  const toggleSort = (value: "recommended" | "price_low" | "price_high") => {
    setFilters((prev) => ({
      ...prev,
      sort: prev.sort === value ? null : value,
    }))
  }

  const queryParams = {
    page,
    search,
    availableDate: filters.availableDate,
    consultationType: filters.consultationType,
    gender: filters.gender,
    sort: filters.sort,
  }

  const { data, isLoading } = useQuery({
    queryKey: ["doctors", queryParams],
    queryFn: () => fetchDoctors(queryParams),
  })

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-8 relative flex flex-col">
        {/* Header with Filter button and Search input */}
        <div className="flex items-center gap-3 mb-6 relative">
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen((p) => !p)}
              className="flex items-center gap-2 rounded-xl border px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition relative"
            >
              <PiSlidersHorizontalThin className="text-gray-500" />
              <span>Filter</span>
              <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-md border">
                <FiChevronRight
                  className={`text-gray-400 transition-transform duration-300 ${isFilterOpen ? "rotate-90" : "rotate-0"
                    }`}
                />
              </span>
            </button>

            <FilterSidebar
              open={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              filters={filters}
              setFilters={setFilters}
            />
          </div>

          {/* Search input and modal */}
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

        {/* Page content - doctors area */}
        <div
          className={`transition-all duration-300 mt-2`}
          style={{
            marginLeft: isFilterOpen ? 172 : 0, // 156 sidebar width + 16 margin
            width: isFilterOpen ? "calc(100% - 172px)" : "100%",
          }}
        >
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
              {(data ?? []).map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}

          {/* pagination */}
          <div
            className={`mt-10 flex ${isFirstPage ? "justify-center" : "justify-between"
              }`}
          >
            {!isFirstPage && (
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded-xl border text-blue-400 border-blue-400 px-14 py-3 text-sm hover:bg-blue-50 cursor-pointer transition"
              >
                Previous page
              </button>
            )}

            <button
              onClick={() => setPage((p) => p + 1)}
              className="rounded-xl border text-blue-400 border-blue-400 px-14 py-3 text-sm hover:bg-blue-50 cursor-pointer transition"
            >
              Next Page
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}