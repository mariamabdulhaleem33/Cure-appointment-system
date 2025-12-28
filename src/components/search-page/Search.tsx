import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

import DoctorCardSkeleton from "./DoctorCardSkeleton"
import { fetchDoctors } from "./api-doctors"
import { DoctorCard } from "./DoctorCard"
import Specialties from "./Specialties"

import { FiChevronRight } from "react-icons/fi"
import { PiSlidersHorizontalThin } from "react-icons/pi"
import Modal from "../map/Modal"

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
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-6 py-8 relative flex flex-col">
        {/* Header with Filter button and Search input */}
        <div className="flex items-center gap-3 mb-6 relative">
          {/* Wrapper relative للزر والـ sidebar عشان نقدر نعمل sidebar absolute تحت الزر */}
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen((p) => !p)}
              className="flex items-center gap-2 rounded-xl border px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition"
            >
              <PiSlidersHorizontalThin className="text-gray-500" />
              <span>Filter</span>
              <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-md border">
                <FiChevronRight
                  className={`text-gray-400 transition-transform duration-300 ${
                    isFilterOpen ? "rotate-90" : "rotate-0"
                  }`}
                />
              </span>
            </button>

            {/* Sidebar يظهر تحت الزر */}
            {isFilterOpen && (
              <aside
                className="absolute left-0 top-full mt-2 w-[156px] h-[771px] bg-white flex flex-col gap-4 p-4 border rounded-xl shadow-lg z-50"
              >
                <h3 className="text-sm font-semibold">Filters</h3>

                {/* Available Date */}
                <div
                  className="flex flex-col"
                  style={{ width: 107, height: 93, gap: 16, opacity: 1 }}
                >
                  <span className="text-xs font-medium text-gray-600 mb-2">
                    Available Date
                  </span>

                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.availableDate === "today"}
                      onChange={() => toggleAvailableDate("today")}
                    />
                    Today
                  </label>

                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.availableDate === "tomorrow"}
                      onChange={() => toggleAvailableDate("tomorrow")}
                    />
                    Tomorrow
                  </label>
                </div>

                {/* Consultation Type */}
                <div
                  className="flex flex-col"
                  style={{ width: 127, height: 93, gap: 16, opacity: 1 }}
                >
                  <span className="text-xs font-medium text-gray-600 mb-2">
                    Consultation Type
                  </span>

                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.consultationType === "in_clinic"}
                      onChange={() => toggleConsultationType("in_clinic")}
                    />
                    In-clinic
                  </label>

                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.consultationType === "home_visit"}
                      onChange={() => toggleConsultationType("home_visit")}
                    />
                    Home Visit
                  </label>
                </div>

                {/* Gender */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-gray-600">
                    Gender
                  </span>

                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.gender.includes("male")}
                      onChange={() => toggleGender("male")}
                    />
                    Male
                  </label>

                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.gender.includes("female")}
                      onChange={() => toggleGender("female")}
                    />
                    Female
                  </label>
                </div>

                {/* Sort */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-gray-600">
                    Sort by price
                  </span>

                  <label className="flex items-center gap-2 text-xs cursor-pointer max-w-[250px]">
                    <input
                      type="checkbox"
                      checked={filters.sort === "recommended"}
                      onChange={() => toggleSort("recommended")}
                    />
                   <span className="truncate"> 
                    Most recommended
                    </span>
                  </label>

                  <label className="flex items-center gap-2 text-xs cursor-pointer max-w-[250px]">
                    <input
                      type="checkbox"
                      checked={filters.sort === "price_low"}
                      onChange={() => toggleSort("price_low")}
                    />
                    <span className=" truncate">
                      Price Low to High
                      </span>
                  </label>

                  <label className="flex items-center gap-2 text-xs cursor-pointer max-w-[250px]">
                    <input
                      type="checkbox"
                      checked={filters.sort === "price_high"}
                      onChange={() => toggleSort("price_high")}
                    />
                   <span className="truncate"> 
                    Price High to Low
                    </span>
                  </label>
                  
                </div>
              </aside>
            )}
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
          className={`transition-all duration-300 mt-6`}
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
            className={`mt-10 flex ${
              isFirstPage ? "justify-center" : "justify-between"
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
